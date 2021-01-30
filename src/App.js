import logo from "./imageInSrc.svg";
import ReactPlayer from "react-player";
import "./App.css";
//import goMyCode from "./gomycode.svg";
//import Logo from "./logo.png";

function App() {
  return (
    <div className="mainDiv">
      <h1 class="title red"> Riadh Khanchel</h1>
      <br />
      <h3> This image is from public folder</h3>
     
        <img
          src="/imageInPublic.png"
          className="imageInSrc "
          alt="imageInPublic"
        />
    
      <br />
      <h3> This image is from Src folder</h3>
      <a href="https://gomycode.com/TN-FR/home">
      <img src={logo} className="App-logo" alt="ImageInSrc" />
      </a>
      <br />
      <h2 class="title blue"> Video from youtube </h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
        width="50%"
      />
      <h2 class="title blue"> Video from public folder </h2>
      <ReactPlayer
        className="react-player fixed-bottom"
        url="/video1.MP4"
        width="50%"
        height="50%"
        controls={true}
      />
    </div>
  );
}

export default App;
