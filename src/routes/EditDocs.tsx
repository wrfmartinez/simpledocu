import { useState, useEffect } from "react";
import GenerateCodeSnippet from "../components/GenerateCodeSnippet";
import TextBox from "../components/TextBox";
import { getDocument, updateDocument } from "../services/documentsAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditDocs: React.FC = () => {
  const navigate = useNavigate();
  // React Router hook that extracts the id parameter from the URL
  const { id } = useParams<{ id: any }>();
  const [title, setTitle] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  const [highlightedLines, setHighlightedLines] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);

  const fetchDocumentData = async () => {
    try {
      // Fetches the document data based on the id passed in
      const documentData = await getDocument(id);
      // Sets the appopriate data for each state to pre-fill inputs with
      setTitle(documentData.title);
      setCodeSnippet(documentData.snippet || "");
      setCodeLanguage(documentData.codeLanguage || "");
      setHighlightedLines(
        documentData.highlightedLines
          ? documentData.highlightedLines.split(",")
          : []
      );
      setText(documentData.text);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    fetchDocumentData();
  }, [id]);

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
      // original structure i.e [1:1,2:7]
      // this will join the array as as a single string since the documentsAPI will add that into an array
      // -> "1:1,2:7"
      highlightedLines: highlightedLines.join(","),
      text: text,
    };
    const ONE_SECOND = 1000;

    try {
      await updateDocument(id, documentData);
      setIsDone(true);
      // React Router hook function to navigate to another URL after updating
      setTimeout(() => navigate(`/dashboard/documents/${id}`), ONE_SECOND);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <section className="edit-documentation create-documentation">
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
          initialCode={codeSnippet}
          initialLanguage={codeLanguage}
          initialHighlightedLines={highlightedLines}
          onChange={handleCodeSnippetChange}
        />
      </div>
      <button onClick={handleSubmit}>Done</button>
      {isDone && <p>Saving...</p>}
    </section>
  );
};

export default EditDocs;
