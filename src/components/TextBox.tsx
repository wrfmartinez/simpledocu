import { useState } from "react"

const TextBox = () => {
  const [ inputText, setInputText ] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  }

  const handleSubmit = () => {
    // save code snippet & text to the database
  }

  return (
    <>
      <textarea value={inputText} onChange={handleChange}>

      </textarea>
      <button>Save</button>
    </>
  )
}

export default TextBox;