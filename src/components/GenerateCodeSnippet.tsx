import CodeSnippet from "./CodeSnippet";
import { useState } from "react";

const GenerateCodeSnippet = () => {
  const [ code, setCode ] = useState("");
  const [ language, setLanguage ] = useState("");

  const handleInput = (e: any): void => {
    setCode(e.target.value);
    setLanguage(e.target.value);
  }

  return (
    <section className="documentation">
      <textarea placeholder="Type your code here" onKeyUp={handleInput}>
        {code}
      </textarea>
      <input
        type="text"
        placeholder="Enter a coding language"
        value={language}
        onChange={handleInput}
      />
      {/* <button onClick={handleSubmit}>Generate Code Snippet</button> */}
      <CodeSnippet code={code} language="js" />
  </section>
  )
}

export default GenerateCodeSnippet;