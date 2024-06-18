// Document.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocument } from '../services/documentsAPI'; // Assuming this is correctly implemented
import CodeSnippet from './CodeSnippet';

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
  const [document, setDocument] = useState<Document | null>(null);

  const fetchDocument = async (id: string) => {
    try {
      const data = await getDocument(id);
      setDocument(data);
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  };

  useEffect(() => {
    fetchDocument(id);
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{document?.title}</h1>
      <CodeSnippet code={document.snippet} language={document.codeLanguage} highlightedLine={document.highlightedLines?.split(",")} />
      <p>{document?.text}</p>
    </div>
  );
};

export default Document;
