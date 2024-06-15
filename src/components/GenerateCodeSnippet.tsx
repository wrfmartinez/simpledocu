import "../assets/css/GenerateCodeSnippet.css";
import CodeSnippet from "./CodeSnippet";
import { useState } from "react";

const GenerateCodeSnippet = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [highlightedLine, setHighlightedLine] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCode(e.target.value);
  };

  return (
    <section className="documentation">
      <div className="user-options">
        <textarea
          className="code-input"
          placeholder="Type your code here"
          name="code"
          onChange={handleInput}
          value={code}
        />
        <label htmlFor="language">Select a Coding Language:</label>
        <select
          name="language"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="typescript">Typescript</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="go">Go</option>
        </select>
        <label htmlFor="language">Highlight Lines:</label>
        <input
          type="text"
          placeholder="Enter line numbers to highlight i.e 2:5, 7:7"
          name="highlightedLine"
          value={highlightedLine}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            // Splits input text value when a comma is present for optional code line highlighting skipping
            const inputArray: string[] = inputValue.split(",");
            const lines = [...inputArray];
            setHighlightedLine(lines)
          }}
        />
      </div>
      {/* <button onClick={handleSubmit}>Generate Code Snippet</button> */}
      <CodeSnippet
        code={code}
        language={language}
        highlightedLine={highlightedLine}
      />
    </section>
  );
};

export default GenerateCodeSnippet;
