import { useState } from "react";

function useFeatures() {
  const [text, setText] = useState("");
  const [isAsending, setAsendingSort] = useState(undefined);
  function handleChange({ value }) {
    setText(value);
  }

  function handleSort() {
    if (isAsending === undefined) return setAsendingSort("asen");
    setAsendingSort(prevState => (prevState === "desc" ? "asen" : "desc"));
  }

  return [text, isAsending, handleChange, handleSort];
}

export default useFeatures;
