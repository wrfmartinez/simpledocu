import "../assets/css/GenerateCodeSnippet.css";
import CodeSnippet from "./CodeSnippet";
import { useState, useEffect } from "react";

interface GenerateCodeSnippetProps {
  initialCode: string;
  initialLanguage: string;
  initialHighlightedLines: string[];
  onChange: (code: string, language: string, highlightedLines: string[]) => void;
}

const GenerateCodeSnippet: React.FC<GenerateCodeSnippetProps> = ({ onChange, initialCode, initialLanguage, initialHighlightedLines }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [highlightedLine, setHighlightedLine] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newCode = e.target.value;
    setCode(newCode);
    onChange(newCode, language, highlightedLine);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    onChange(code, newLanguage, highlightedLine);
  };

  const handleHighlightedLinesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const lines = inputValue.split(",");
    setHighlightedLine(lines);
    onChange(code, language, lines);
  };

  useEffect(() => {
    setCode(initialCode);
    setLanguage(initialLanguage);
    setHighlightedLine(initialHighlightedLines);
  }, [initialCode, initialLanguage, initialHighlightedLines]);

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
          onChange={handleLanguageChange}
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
        <label htmlFor="highlightedLine">Highlight Lines:</label>
        <input
          type="text"
          placeholder="Enter line numbers to highlight i.e 2:5, 7:7"
          name="highlightedLine"
          value={highlightedLine.join(",")}
          onChange={handleHighlightedLinesChange}
        />
      </div>
      <CodeSnippet
        code={code}
        language={language}
        highlightedLine={highlightedLine}
      />
    </section>
  );
};

export default GenerateCodeSnippet;
