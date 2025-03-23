import React from "react";
import { Link } from "react-router-dom";
import image from "../../cinema9.jpg"


const Open = () => {
 return (
    <>
       <div
        style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",  backgroundPosition: "center" }}
        className="h-screen flex flex-col items-center justify-center"
       >
        <div className="text-center text-7xl font-extrabold">
          <p className="text-black">"Welcome To Movie Store"</p>
        </div>
        <div>
          <Link to="/movies">
            <button className="bg-sky-300 hover:bg-sky-600 text-black text-2xl font-bold mt-12 py-2 px-4 border-2 border-black rounded">
              כניסה
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Open;
