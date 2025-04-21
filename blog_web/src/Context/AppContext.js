import { createContext, useState } from "react";
import { baseUrl } from "../BaseUrl";

export const AppContext = createContext();


export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);


  // try to get the data from url
  async function Fetchdata(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    // we get the url of the blogs and tag
    try {
      const result = await fetch(url);
      //convert it into json format
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setTotal(data.totalPages);
      setPost(data.posts);
    } catch {
      console.log("there is an error ");
      setPost([]);
      setTotal(null);
    }
    setLoading(false);
  }

  // ab data aa gya feeling srur kri padgi
  function chageHandler(page) {
   
    setPage(page);
   
  }

  const value = {
    loading,
    setLoading,
    post,
    setPost,
    page,
    setPage,
    total,
    setTotal,
    chageHandler,
    Fetchdata
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
