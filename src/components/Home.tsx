import simpledocuLogo from "/simpledocu.svg";
import "../assets/css/Home.css";
import GenerateCodeSnippet from "./GenerateCodeSnippet";

const Home = () => {
  return (
    <main>
      {/* <header className="hero">
        <img src={simpledocuLogo} alt="Simple Docu logo" />
        <p>A tool to write beautiful markdown with code snippet capability</p>
      </header> */}
      <GenerateCodeSnippet />
    </main>
  );
};

export default Home;
