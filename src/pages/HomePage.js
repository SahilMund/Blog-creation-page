import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getDataFromLocalStorage } from "../utils/localStorage";

function HomePage() {
  const blog = getDataFromLocalStorage("blogData");

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (!blog) {
    return (
      <div className="col-lg-12 mt-3 col-md-6 col mb-4">
        <div className=" card p-0 shadow">
          <div className="card-header d-flex align-items-center m-0 p-0">
            <div className=" pt-2 ml-2"></div>
          </div>

          <div
            className="card-body"
            style={{ height: 170}}
          >
            <h3> No Blogs Present, Create Blog Posts !!</h3>
          </div>
        </div>
      </div>
    );
  }

  const renderCards = blog ? (
    blog.map((blog, index) => {
      const currentDate = new Date(blog.createdAt);

   
      const formattedDate = currentDate?.toLocaleDateString("en-US", options);

      return (
        <div className="col-lg-4  col-md-6 col mb-4" key={index}>
          <div className=" card p-0 shadow">
            <div className="card-header d-flex align-items-center m-0 p-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                className="ml-2"
                style={{ width: 50, borderRadius: 50 }}
                alt={blog.image}
              />
              <div className=" pt-2 ml-2">
                <p className="m-0 p-0">
                  <strong>{blog.title}</strong>
                </p>
                <p>{formattedDate}</p>
              </div>
            </div>

            <div
              className="card-body"
              style={{ height: 170, overflowY: "scroll" }}
            >
              <h6> Description : <span> {blog.description}</span></h6>
              <hr/>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="card-footer text-center">
              <Link
                className="card-link"
                style={{ color: "black" }}
                to={`/post/${blog._id}`}
              >
                {" "}
                <i className="fas fa-ellipsis-h " />
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <Spinner />
  );

  return (
    <div className="container mt-3">
      <div className="row row-cols-1 mt-4 row-cols-md-2">{renderCards}</div>
    </div>
  );
}

export default HomePage;
