import React, { useContext } from "react";
import { FeaturesContext } from "../context/FeaturesContext";

function Sort() {
  const { handleSort, isAsending } = useContext(FeaturesContext);

  return (
    <div>
      <button className="btn btn-secondary" onClick={handleSort}>
        price{" "}
        {isAsending === undefined ? null : isAsending === "asen" ? (
          <i className="fa fa-arrow-up"></i>
        ) : (
          <i className="fa fa-arrow-down"></i>
        )}
      </button>
    </div>
  );
}
export default Sort;
