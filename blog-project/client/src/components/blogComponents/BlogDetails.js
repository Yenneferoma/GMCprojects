import { useEffect, useState } from "react";
import blogImage from "../../assets/blog-image.png";
import { useParams } from "react-router-dom";
import { useGetBlogsByIdMutation } from "../../lib/APIs/blogApis";
import styles from "./Blog.module.css";

const BlogDetails = () => {
  const [getBlogById, { data, isError, isLoading, error }] =
    useGetBlogsByIdMutation();
  const params = useParams();
  const { blogId } = params;

  useEffect(() => {
    const timer = setTimeout(() => {
      getBlogById(blogId);
    }, 300);

    return () => clearTimeout(timer);
  }, [blogId, getBlogById]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-6">
          {data && <h3>{data?.getSingleBlog?.title}</h3>}
          {data && (
            <div className="mt-4">
              <p>{data?.getSingleBlog?.content}</p>
            </div>
          )}
        </div>
        <div className="col-lg-6">
          <img
            src={blogImage}
            alt={data?.getSingleBlog?.title}
            className={styles.blog_image}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
