import React from 'react';
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title';

function BlogsPage() {
  return (
    <div className="BlogsPage">
      <div className="blog-title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="blogs">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
                <div className="dates-container">
                  <p className="date-info">
                    {blog.date}/{blog.month}/{blog.year}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
