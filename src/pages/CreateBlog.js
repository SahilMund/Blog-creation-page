import React, { useEffect, useState } from "react";
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
  const [btnloader, setBtnLoader] = useState(false);

  const [displayAlert, setDisplayAlert] = useState(null);

  useEffect(() => {
    setDisplayAlert(null);
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setContent("");
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnLoader(true);


    if (!title || !content || !description) {
      (!title &&
        setDisplayAlert({
          msg: "Please Enter the blog title",
          type: "danger",
        })) ||
        (!content &&
          setDisplayAlert({
            msg: "Please Enter the blog content",
            type: "danger",
          })) ||
        (!description &&
          setDisplayAlert({
            msg: "Please Enter the blog description",
            type: "danger",
          }));

      setBtnLoader(false);
      return;
    }

    const formData = {
      title: title,
      description: description,
      content: content,
      createdAt: Date.now(),
    };

    storeDataToLocalStorage("blogData", formData);

    setDisplayAlert({msg: "YAY!! Your blog posted successfully !!", type:"success"})
    resetForm();
    setBtnLoader(false);
  };

  return (
    <div className="container mt-5 min-w-1000px">
      {displayAlert && (
        <div
          className={`alert alert-${displayAlert.type} alert-dismissible fade show`}
          role="alert"
        >
          {displayAlert.msg}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setDisplayAlert(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <h2>Create blog</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="validationCustom03"
            />
            <div className="invalid-feedback">Please enter a blog title.</div>
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
            config={{
              ...editorConfiguration,
              placeholder: "Write your blog post ...",
            }}
          />

          <button
            className="btn btn-block mt-3 btn-info"
            type="submit"
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
