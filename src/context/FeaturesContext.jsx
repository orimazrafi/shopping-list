import React from "react";
import useFeatures from "./../hooks/UseFeatures";

const FeaturesContext = React.createContext();

function FeaturesContextProvider(props) {
  const [text, isAsending, handleChange, handleSort] = useFeatures();
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
