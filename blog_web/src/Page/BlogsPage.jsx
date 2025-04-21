import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import Headers from '../Component/Headers';
import Blogpost from '../Component/Blogpost';

function BlogsPage() {
  const [loading, setLoading] = useContext(AppContext);
  const [related, setRelated] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(null);

  const blogId = location.pathname.split('/').at(-1);

  async function fetchBlogpost() {
    setLoading(true);
    const url = `https://codehelp-apis.vercel.app/api/get-blogs?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setBlog(data.blog);
      setRelated(data.relatedBlogs);
    } catch (error) {
      console.log('Something went wrong', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchBlogpost();
    }
  }, [location.pathname]);

  return (
    <div>
      <Headers />
      <div className="container mx-auto my-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        {loading ? (
          <div>
            <p>Loading</p>
          </div>
        ) : blog ? (
          <div>
            <Blogpost post={blog} />
            <h2 className="text-2xl font-bold my-4">Related Blogs</h2>
            {related.map((post) => (
              <Blogpost key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div>
            <p>No blog found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogsPage;
