import React, { useContext } from "react";
import Spinner from './Spinner';
import { AppContext } from "../Context/AppContext";
import Blogpost from "./Blogpost"; // Assuming Blogpost component is correctly imported

function Blogs() {
  const { loading, post } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 mx-auto mb-10">
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div className="text-center">
          <p className="font-bold text-xl">No post found</p>
        </div>
      ) : (
        post.map((item) => (
          <Blogpost key={item.id} post={item}></Blogpost>
        ))
      )}
    </div>
  );
}

export default Blogs;
