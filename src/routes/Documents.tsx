// Documents.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocuments } from "../services/documentsAPI";
import "../assets/css/Documents.css";

interface Document {
  _id: string;
  title: string;
}

const Documents: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  return (
    <div>
      <h1>Documents</h1>
      <ul className="docs-container">
        {documents.map((doc) => (
          <Link className="doc-text" key={doc._id} to={`${doc._id}`}>
            <li className="card-doc" key={doc._id}>
              {doc.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
