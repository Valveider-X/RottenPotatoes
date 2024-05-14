import React, { useState } from "react";

function FormReview() {

  const [nameValue, setNameValue]=useState("")

  return (
    <div>
      FormReview
      <h2>Review</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={nameValue}/>
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
