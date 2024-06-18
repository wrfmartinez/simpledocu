import { useState, useEffect } from "react";
import GenerateCodeSnippet from "../components/GenerateCodeSnippet";
import TextBox from "../components/TextBox";
import { getDocument, updateDocument } from "../services/documentsAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditDocs: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const [title, setTitle] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  const [highlightedLines, setHighlightedLines] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const documentData = await getDocument(id);
        setTitle(documentData.title);
        setCodeSnippet(documentData.snippet || "");
        setCodeLanguage(documentData.codeLanguage || "");
        setHighlightedLines(documentData.highlightedLines ? documentData.highlightedLines.split(",") : []);
        setText(documentData.text);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocumentData();
  }, [id]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCodeSnippetChange = (codeSnippet: string, codeLanguage: string, highlightedLines: string[]) => {
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
      highlightedLines: highlightedLines.join(","),
      text: text
    };

    try {
      await updateDocument(id, documentData);
      setIsDone(true);
      setTimeout(() => navigate(`/dashboard/documents/${id}`), 1000); // Navigate to document after 1 second
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <section className="edit-documentation">
      <label htmlFor="title">Title </label>
      <input type="text" name="title" value={title} onChange={handleTitleChange} />
      <GenerateCodeSnippet initialCode={codeSnippet} initialLanguage={codeLanguage} initialHighlightedLines={highlightedLines} onChange={handleCodeSnippetChange} />
      <TextBox value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Done</button>
      {isDone && <p>Saving...</p>}
    </section>
  );
};

export default EditDocs;
