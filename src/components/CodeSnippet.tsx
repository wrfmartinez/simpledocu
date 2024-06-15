import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import "../assets/css/CodeSnippet.css";

interface IProps {
  code: string,
  language: string
}

const CodeSnippet = ({ code, language }: IProps) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <aside className="code-snippet">
      <CodeBlock code={code} language={language}>
        <CodeBlock.Code className="code">
          {({ isLineHighlighted }) => (
            <div
              className={`table-row ${
                isLineHighlighted ? "bg-darkgray" : "opacity-100"
              }`}
            >
              <CodeBlock.LineNumber
                className={`table-cell line-number ${
                  isLineHighlighted ? "text-gray-300" : "text-gray-500"
                }`}
              />
              <CodeBlock.LineContent className="table-cell">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          )}
        </CodeBlock.Code>
        <button
          className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
          onClick={copyCode}
        >
          {state.value ? "Copied!" : "Copy code"}
        </button>
      </CodeBlock>
    </aside>
  );
};

export default CodeSnippet;
