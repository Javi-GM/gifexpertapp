import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
  //hook
  const [inputValue, setInputValue] = useState('');
  //Handlers
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [ inputValue,...categories]);
      setInputValue('');
    }

  };
  
  return (
    <form onSubmit={handleSubmit}>
      <button>Add category</button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
//propTypes
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
//exports
export default AddCategory;
