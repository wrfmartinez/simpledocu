import "../assets/css/GenerateCodeSnippet.css";
import CodeSnippet from "./CodeSnippet";
import { useState, useEffect } from "react";

interface GenerateCodeSnippetProps {
  initialCode: string;
  initialLanguage: string;
  initialHighlightedLines: string[];
  onChange: (
    code: string,
    language: string,
    highlightedLines: string[]
  ) => void;
}

const GenerateCodeSnippet: React.FC<GenerateCodeSnippetProps> = ({
  initialCode = "",
  initialLanguage = "",
  initialHighlightedLines = [],
  onChange,
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [highlightedLine, setHighlightedLine] = useState<string[]>(
    initialHighlightedLines
  );

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

  const handleHighlightedLinesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    const lines = inputValue.split(",").map((line) => line.trim());
    setHighlightedLine(lines);
    onChange(code, language, lines);
  };

  useEffect(() => {
    setCode(initialCode);
    setLanguage(initialLanguage);
    setHighlightedLine(initialHighlightedLines);
  }, []);

  return (
    <>
      <div className="user-options">
        <select
          className="code-language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="">Select Language</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="typescript">Typescript</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="go">Go</option>
        </select>
        <input
          type="text"
          className="highlighted-lines"
          placeholder="Enter line numbers to highlight i.e 2:5, 7:7"
          name="highlightedLine"
          value={highlightedLine.join(",")}
          onChange={handleHighlightedLinesChange}
        />
        <textarea
          className="code-input"
          placeholder="Type your code here"
          name="code"
          value={code}
          onChange={handleInput}
        />
      </div>
      <CodeSnippet
        code={code}
        language={language}
        highlightedLine={highlightedLine}
      />
    </>
  );
};

export default GenerateCodeSnippet;
