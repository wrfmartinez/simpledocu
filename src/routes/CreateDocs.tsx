import GenerateCodeSnippet from "../components/GenerateCodeSnippet";
import TextBox from "../components/TextBox";

const CreateDocs = () => {
  return (
    <section className="create-documentation">
      <GenerateCodeSnippet />
      <TextBox />
      <button>Save</button>
    </section>
  )
}

export default CreateDocs;