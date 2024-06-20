const BASE_URL = "http://18.118.188.124:3000";

export const getDocuments = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/`);
  if (!response.ok) {
    throw new Error("Fetch response failed. Could not find");
  }
  return response.json();
};

export const getDocument = async (documentId: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/document/${documentId}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Document not found");
    } else {
      throw new Error("Fetch response failed");
    }
  }
  return response.json();
};

export const createDocument = async (document: any): Promise<any> => {
  // Convert highlightedLines to string if it's an array
  if (Array.isArray(document.highlightedLines)) {
    document.highlightedLines = document.highlightedLines.join(",");
  }

  const response = await fetch(`${BASE_URL}/document/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(document),
  });
  if (!response.ok) {
    throw new Error("Fetch response failed. Could not create");
  }
  return response.json();
};

export const updateDocument = async (
  documentId: string,
  document: any
): Promise<any> => {
  const response = await fetch(`${BASE_URL}/document/${documentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(document),
  });
  if (!response.ok) {
    throw new Error("Fetch response failed. Could not update");
  }
  return response.json();
};

export const deleteDocument = async (documentId: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}/document/${documentId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Fetch response failed. Could not delete");
  }
  return response.json();
};
