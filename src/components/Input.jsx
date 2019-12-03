import React from "react";
function Input({ handleChange, text }) {
  return (
    <div className="input-container form-group">
      <input
        type="text"
        value={text}
        name="text"
        className="form-control"
        placeholder="I am shopping for..."
        onChange={event => handleChange(event.currentTarget)}
      />
    </div>
  );

  //   <div class="form-group">
  //   <label for="exampleInputEmail1">Email address</label>
  //   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  //   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  // </div>
}
export default Input;
