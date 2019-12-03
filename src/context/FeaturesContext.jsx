import React, { useState } from "react";

const FeaturesContext = React.createContext();

function FeaturesContextProvider(props) {
  const [text, setText] = useState("");
  const [isAsending, setAsendingSort] = useState(undefined);
  function handleChange({ value }) {
    setText(value);
  }

  function handleSort() {
    if (isAsending === undefined) return setAsendingSort("asen");
    setAsendingSort(prevState => {
      return prevState === undefined || prevState === "desc" ? "asen" : "desc";
    });
  }

  return (
    <FeaturesContext.Provider
      value={{
        handleChange,
        text,
        handleSort,
        isAsending
      }}
    >
      {props.children}
    </FeaturesContext.Provider>
  );
}

export { FeaturesContextProvider, FeaturesContext };
