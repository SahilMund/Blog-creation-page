import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { storeDataToLocalStorage } from "../utils/localStorage";

const editorConfiguration = {
  removePlugins: ["mediaEmbed", "imageUpload"],
};

const CreateBlog = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [btnloader, setbtnLoader] = useState(false);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setContent("");
    return;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setbtnLoader(true);

    if (!title || !description || !content) {
      alert("title, description and content all are required fields");
      resetForm();
      setbtnLoader(false);
      return;
    }

    const formData = {
      title: title,
      description: description,
      content: content,
      createdAt: Date.now(),
    };

    storeDataToLocalStorage("blogData", formData);

    resetForm();
    setbtnLoader(false);
  };

  return (
    <div className="container mt-5">
      <h2>Create blog</h2>

      <div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="validationCustom03"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <CKEditor
          editor={ClassicEditor}
          data="<p>Write your blog post ...</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          config={editorConfiguration}
        />

        <form onSubmit={onSubmit}>
          {btnloader == false ? (
            <button className="btn btn-block m-3 btn-info" onSubmit={onSubmit}>
              Submit
            </button>
          ) : (
            <button
              className="btn btn-block btn-info m-3"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
