import './intro.scss';
import CustomButton from "../../Components/CustomButton";
import paulHead from "../../assets/paul-head.png";
import jeffHead from "../../assets/jeff-head.png";

function Intro (props) {
  const {
    setDisplay
  } = props;

  return (
  <div className="intro">
    <div className="santaHead__container">
      <img src={jeffHead} alt="santa head" className="santaHead2"/>
      <img src={paulHead} alt="santa head" className="santaHead1"/>
    </div>
    <div className="heading">
      <h1>Have you been</h1>
      <div className="tagline">
        <h1 className="keyword" data-text="Naughty">Naughty</h1>
        <h1 className="or">or</h1>
        <h1 className="keyword nice" data-text="Nice">Nice</h1>
      </div>
      <h1>this year?</h1>
    </div>
    <CustomButton
      buttonType={"button__filled"}
      handleClick={() => setDisplay("generator")}
      text="Find Out Now"
    />
  </div>
  )
};

export default Intro;

