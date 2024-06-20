import { useState } from "react";
import GenerateCodeSnippet from "../components/GenerateCodeSnippet";
import TextBox from "../components/TextBox";
import { createDocument } from "../services/documentsAPI";
import "../assets/css/CreateDocs.css";

const CreateDocs: React.FC = () => {
  const [title, setTitle] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  const [highlightedLines, setHighlightedLines] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [notSaved, setNotSaved] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCodeSnippetChange = (
    codeSnippet: string,
    codeLanguage: string,
    highlightedLines: string[]
  ) => {
    setCodeSnippet(codeSnippet);
    setCodeLanguage(codeLanguage);
    setHighlightedLines(highlightedLines);
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleSubmit = async () => {
    const documentData = {
      title: title,
      snippet: codeSnippet,
      codeLanguage: codeLanguage,
      highlightedLines: highlightedLines,
      text: text,
    };

    try {
      await createDocument(documentData);
      // Reset input state
      setTitle("");
      setCodeSnippet("");
      setCodeLanguage("");
      setHighlightedLines([]);
      setText("");
      // Show success message
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000); // Hide message after 3 seconds
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error creating document:", error);
      // Show success message
      setNotSaved(true);
      setTimeout(() => setNotSaved(false), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <section className="create-documentation">
      <div className="create-text-container">
        <input
          className="create-title"
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <TextBox value={text} onChange={handleTextChange} />
      </div>
      <div>
        <GenerateCodeSnippet
          initialCode=""
          initialLanguage=""
          initialHighlightedLines={[]}
          onChange={handleCodeSnippetChange}
        />
      </div>
      <button onClick={handleSubmit}>Save</button>
      {isSaved && <p>Document saved successfully!</p>}
      {notSaved && <p>Sorry. Document could not be saved. Try again later.</p>}
    </section>
  );
};

export default CreateDocs;
