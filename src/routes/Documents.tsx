// Documents.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocuments } from "../services/documentsAPI";

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
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: "30px",
          gap: "20px",
          flexWrap: "wrap",
          border: "1px solid #fff",
          borderRadius: "10px",
        }}
      >
        {documents.map((doc) => (
          <Link style={{ color: "#000" }} to={`${doc._id}`}>
            <li
              className="card-doc"
              style={{
                width: "100px",
                height: "130px",
                textAlign: "center",
                border: "1px solid #fff",
                padding: "20px",
                backgroundColor: "#fff",
              }}
              key={doc._id}
            >
              {doc.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
