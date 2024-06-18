import { useState } from "react";
import GenerateCodeSnippet from "../components/GenerateCodeSnippet";
import TextBox from "../components/TextBox";
import { createDocument } from "../services/documentsAPI";

const CreateDocs: React.FC = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [text, setText] = useState("");

  const handleCodeSnippetChange = (newSnippet: string) => {
    setCodeSnippet(newSnippet);
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleSubmit = async () => {
    const documentData = {
      title: "Your Document Title", // Replace this with the actual title you want to use
      snippet: codeSnippet,
      text: text
    };

    try {
      await createDocument(documentData);
      // Handle successful document creation (e.g., show a success message, redirect, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error creating document:", error);
    }
  };

  return (
    <section className="create-documentation">
      <GenerateCodeSnippet onChange={handleCodeSnippetChange} />
      <TextBox onChange={handleTextChange} />
      <button onClick={handleSubmit}>Save</button>
    </section>
  );
};

export default CreateDocs;
