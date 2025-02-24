import "../styles/Intro1.css";
import image from "../assets/intro-img.jpg";

const wrapText = (text) => {
  return text.split("").map((char, index) => {
    if (char === " ") {
      return <span key={index} className="space">&nbsp;</span>; 
    }
    return (
      <span key={index} className="hover-char">
        {char}
      </span>
    );
  });
};

const Intro1 = () => {
  return (
    <div className="intro-container">
      <div className="intro-image-container">
        <img src={image} alt="Intro" className="intro-image" />
      </div>
      <div className="intro-text">
        <h1>{wrapText("ERIK  HAI")}</h1>
        <p>{wrapText("STUDENT BY DAY | CODER BY NIGHT")}</p>
      </div>
    </div>
  );
};

export default Intro1;
