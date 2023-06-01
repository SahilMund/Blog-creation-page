import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { storeDataToLocalStorage } from "../utils/localStorage";

const editorConfiguration = {
  removePlugins: ["mediaEmbed", "imageUpload"],
};

const CreateBlog = () => {
  const [content, setContent] = useState("<p>Write your blog post ...</p>");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [btnloader, setbtnLoader] = useState(false);
  const [displayMsg, setDisplayMsg] = useState(false);

  useEffect(() => {
    setDisplayMsg(false);
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setContent("<p>Write your blog post ...</p>");
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
    setDisplayMsg(true);
  };

  return (
    <div className="container mt-5">
      {displayMsg && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Yay !!</strong> Your blog posted successfully !!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
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
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          config={editorConfiguration}
        />

        <form onSubmit={onSubmit}>
          <button
            className="btn btn-block m-3 btn-info"
            onSubmit={onSubmit}
            disabled={btnloader}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
