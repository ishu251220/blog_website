import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Blogs from '../Component/Blogs';
import Footer from '../Component/Footer';
import Headers from '../Component/Headers';

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

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
        <h2 className="text-2xl font-bold my-4">Blogs related to #{tag}</h2>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default TagPage;
