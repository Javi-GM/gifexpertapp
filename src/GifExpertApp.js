import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

//functional component
const GifExpertApp = (props) => {
  const [categories, setCategories] = useState(["One punch"]);

  // const handleAddCategory = e =>{
  //   setCategories([...categories,'Goku'])
  // };

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <div>
        {
          categories.map((category) => {
             return <GifGrid 
                category={category}
                key={category} 
              />;
          })
        }
      </div>
    </>
  );
};

export default GifExpertApp;
