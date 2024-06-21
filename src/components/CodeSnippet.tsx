import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import "../assets/css/CodeSnippet.css";

// Define the structure of the code snippet object
interface IProps {
  code: string;
  language: string;
  highlightedLine: string[];
}

const CodeSnippet = ({ code, language, highlightedLine }: IProps) => {
  // Hook provided by React Code Blocks to copy code to clipboard
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    copyToClipboard(code);
  };

  // Render the code block
  // Code is based on documentation with little to no adjustment
  // https://react-code-block.netlify.app/usage
  return (
    <aside className="code-snippet">
      <CodeBlock code={code} language={language} lines={[...highlightedLine]}>
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
        <button onClick={copyCode}>
          {state.value ? "Copied!" : "Copy code"}
        </button>
      </CodeBlock>
    </aside>
  );
};

export default CodeSnippet;
