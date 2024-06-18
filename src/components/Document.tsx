// Document.tsx
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { Remarkable } from 'remarkable';
import { useParams } from 'react-router-dom';
import { getDocument } from '../services/documentsAPI';
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
  const md = new Remarkable('commonmark');
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

  const markdownTextInHTML = md.render(document?.text);
  const clean = DOMPurify.sanitize(markdownTextInHTML);

  return (
    <div>
      <h1>{document?.title}</h1>
      {document.snippet && document.codeLanguage && document.highlightedLines && (
        <CodeSnippet code={document.snippet} language={document.codeLanguage} highlightedLine={document.highlightedLines?.split(",")} />
      )}
      <div dangerouslySetInnerHTML={{__html: clean}}></div>
    </div>
  );
};

export default Document;
