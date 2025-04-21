import React from 'react'
import Headers from '../Component/Headers'
import { useLocation, useNavigate, useNavigation } from 'react-router'
import Blogs from '../Component/Blogs';
import Footer from '../Component/Footer';

export const CateogryPage = () => {

    const navigation=useNavigate();
    const location=useLocation();
    const cateogry=location.pathname.split("/").at(-1);

  return (
    <div>
        <Headers></Headers>
    <div>
        <button onClick={()=>(navigation(-1))}>
            back
        </button>
        
    </div>
    <h2> related vlog <span>{cateogry}</span></h2>
    <Blogs></Blogs>
    <Footer></Footer>
    </div>
  )
}
export default CateogryPage;

