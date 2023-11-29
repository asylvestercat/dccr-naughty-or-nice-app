import './intro.scss';
import CustomButton from "../../Components/CustomButton";

const Intro = ({setDisplay}) => (
  <div className="intro">
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
);

export default Intro;

