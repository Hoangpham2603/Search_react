import React from "react";
import { useState } from "react";
const Searchbar = ({onSubmit}) => {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }

    const handleChange = (e) => { 
        setTerm(e.target.value);
        }

  return (
    <div className=" mt-5 form-group search-bar">
      <form className="form-control" onSubmit={handleFormSubmit}>
        <h2 className="text-center text text-success">What do you wish to find?</h2>
        <input className="form-control" value={term} type="text" onChange={handleChange}/>
      </form>
    </div>
  );
};

export default Searchbar;
