import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Footer(){
    const{page,total,chageHandler}=useContext(AppContext);
    return(<div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ">
    <div className="flex justify-between w-11/12 max-w-[670px] py-2">
    
    <div className="flex gap-x-2">
     {
            page>1 &&
            (<button onClick={()=>chageHandler(page+1) } className="rounded-md border px-4 py-2">
              previous
            </button>)
        }
  
        {
            page<total &&
            (<button onClick={()=>chageHandler(page+1) } className="rounded-md border px-4 py-2">
                next
            </button>)
        }
    </div>
      
        <p>
            page {page} of {total}
        </p>
    </div>

    </div>)
}
export default Footer;
