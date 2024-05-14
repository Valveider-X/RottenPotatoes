import React, { useState } from "react";

function FormReview() {

  const [nameValue, setNameValue]=useState("")

  const handleNameChange=(e)=>{
   // console.log("escribiendo", e.target.value);
    setNameValue(e.target.value.toUpperCase().replace("ALFONSO", "ALFONSO MANUEL"))
  }

  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={nameValue} onChange={handleNameChange}/>
        </div>

        <div>
          <label>Comments:</label>
          <input type="text" name="comments" />
        </div>

        <button>Are you sure?</button>
      </form>
    </div>
  );
}

export default FormReview;
