import React, { useContext } from "react";
import { FeaturesContext } from "../context/FeaturesContext";

function Input() {
  const { text, handleChange } = useContext(FeaturesContext);

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
}
export default Input;
