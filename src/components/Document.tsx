// Document.tsx
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Remarkable } from "remarkable";
import { useParams, useNavigate } from "react-router-dom";
import { getDocument, deleteDocument } from "../services/documentsAPI";
import CodeSnippet from "./CodeSnippet";

interface Document {
  _id: string;
  title: string;
  snippet?: string;
  codeLanguage?: string;
  highlightedLines?: string;
  text: string;
}

const Document: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const md = new Remarkable("commonmark");
  const [document, setDocument] = useState<Document | null>(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const fetchDocument = async (id: string) => {
    try {
      const data = await getDocument(id);
      setDocument(data);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    fetchDocument(id);
  }, [id]);

  if (isDeleted) {
    navigate("/dashboard/documents");
    return <div>Loading...</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  const markdownTextInHTML = md.render(document?.text);
  const clean = DOMPurify.sanitize(markdownTextInHTML);

  const handleDelete = async () => {
    try {
      await deleteDocument(document._id);
      setIsDeleted(true);
    } catch (err) {
      console.error("Could not delete document: ", err);
    }
  }

  const handleEdit = () => {
    navigate(`/dashboard/documents/${id}/edit`);
  };

  return (
    <div>
      <h2 style={{ borderBottom: "1px solid white" }}>Notes</h2>
      {
        <CodeSnippet
          code={document.snippet ? document.snippet : ""}
          language={document.codeLanguage ? document.codeLanguage : ""}
          highlightedLine={
            document.highlightedLines
              ? document.highlightedLines?.split(",")
              : []
          }
        />
      }
      <div>
        <div className="" dangerouslySetInnerHTML={{ __html: clean }}></div>
      </div>
      <div style={{display: "flex", gap: "10px"}}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Document;
