import React from 'react';
import { NavLink } from 'react-router-dom';

const Blogpost = ({ post }) => {
  return (
    <div className="blog-post">
      <NavLink to={`/blog/${post.id}`} className="post-title">
        <h2>{post.title}</h2>
      </NavLink>
      <div className="post-meta">
        <p>
          by <span className="author">{post.author}</span> on{' '}
          <span className="date">{post.date}</span>
        </p>
      </div>
      <NavLink
        to={`/categories/${post.category?.replaceAll(' ', '-')}`}
        className="category-link"
      >
        <span className="category">{post.category}</span>
      </NavLink>
      <p className="post-content">{post.content}</p>
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag?.replaceAll(' ', '-')}`} className="tag-link">
            <span className="tag">#{tag}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Blogpost;
