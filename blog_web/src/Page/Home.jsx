import React from 'react';
import Blogs from '../Component/Blogs';
import Footer from '../Component/Footer';
import Headers from '../Component/Headers';

function Home() {
  return (
    <div>
      <Headers />
      <div className="container mx-auto my-8">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
