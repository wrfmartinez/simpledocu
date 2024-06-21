// Document.tsx
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Remarkable } from "remarkable";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDocument, deleteDocument } from "../services/documentsAPI";
import CodeSnippet from "./CodeSnippet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Document.css";

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

  // Redirect to document list if document is deleted
  if (isDeleted) {
    navigate("/dashboard/documents");
    return <div>Loading...</div>;
  }

  // Render loading message if document is not yet fetched
  if (!document) {
    return <div>Loading...</div>;
  }

  // Converts markdown text to HTML
  const markdownTextInHTML = md.render(document?.text);
  // Sanitizes HTML prevents XSS attacks
  const clean = DOMPurify.sanitize(markdownTextInHTML);

  const handleDelete = async () => {
    try {
      await deleteDocument(document._id);
      setIsDeleted(true);
    } catch (err) {
      console.error("Could not delete document: ", err);
    }
  };

  const handleEdit = () => {
    navigate(`/dashboard/documents/${id}/edit`);
  };

  return (
    <div>
      <h2 className="document-title">Notes</h2>
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
        {/* Markdown rendered here as HTML. __html: clean is sanitizing the html before setting the innerHTML */}
        <div dangerouslySetInnerHTML={{ __html: clean }}></div>
      </div>
      <div className="btn-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Link to="/dashboard/documents">
        <FontAwesomeIcon className="back-btn" icon={faArrowCircleLeft} />
      </Link>
    </div>
  );
};

export default Document;
