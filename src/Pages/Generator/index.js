import {useState, useEffect} from "react";
import "./generator.scss";
import HandScanner from "../../Components/HandScanner";
import blueHandImg from '../../assets/hand-blue.svg';

function Generator(props) {
  const {
    setDisplay
  } = props;

  const [touchClickEvent, setTouchClickEvent] = useState(false);

  const handleEventStart = () => {
    setTimeout(() => {
      setTouchClickEvent(true);
    }, 500);
  };

  useEffect(() => {
    if (touchClickEvent) {
      setTimeout(() => {
        setDisplay("results");
      }, 8500);
    }
  });

  return (
    <div className="generator" onClick={handleEventStart} onTouchStart={handleEventStart}>
      {
        !touchClickEvent ?
        <div className="generator__placeHand">
          <div className="generator__placeHand__cta">
            <p data-text="Place Hand Here">Place Hand Here</p>
          </div>
          <img src={blueHandImg} alt="blue hand outline"/>
        </div>
        :
        <HandScanner/>
      }
      {/*<CustomButton*/}
      {/*  handleClick={() => setDisplay("results")}*/}
      {/*  text="Results!"*/}
      {/*/>*/}
    </div>
  );
}

export default Generator;

