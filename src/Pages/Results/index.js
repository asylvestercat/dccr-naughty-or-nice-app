import {useEffect, useState} from "react";
import "./results.scss";
import CustomButton from "../../Components/CustomButton";
import trainTracks from "../../assets/train-tracks.svg";
import mineCart from "../../assets/mine-cart.svg";
import presentMineCart from "../../assets/present-mine-cart.svg";

function Generator(props) {
  const {
    setDisplay
  } = props;

  const [resultsCalculated, setResultsCalculated] = useState(false);
  const [naughtyOrNice, setNaughtyOrNice] = useState('');
  const [renderFadeOut, setRenderFadeOut] = useState(false);
  const fiftyFiftyMath = Math.random() < 0.5;

  function naughtyOrNiceMath() {
    setNaughtyOrNice(fiftyFiftyMath ? 'nice' : 'naughty');
  }

  useEffect(() => {
      naughtyOrNiceMath();
      setTimeout(() => {
        setRenderFadeOut(true);
      }, 4600);
      setTimeout(() => {
        setResultsCalculated(true);
      }, 5100);
  });

  return (
    <div className="results">
      {
        !resultsCalculated ?
          <div className={"results__loading " + (!renderFadeOut ? 'renderFadeIn' : 'renderFadeOut')}>
            <p className="results__calculating">Calculating</p>
            <div className="results__loadingBar">
              <div className="results__loadingBar__outer">
                <div className="results__loadingBar__inner"></div>
              </div>
            </div>
          </div>
          :
          <div className={"results__finished " + (!renderFadeOut ? '' : 'renderFadeIn')}>
            {
              naughtyOrNice === 'naughty' ?
                <div>
                  <p className="results__naughtyOrNice naughty" data-text="NAUGHTY">NAUGHTY</p>
                  <div className="trainTracks__container">
                    <img src={trainTracks} alt="train tracks" className="trainTracks" />
                    <img src={mineCart} alt="mine cart" className="mineCart" />
                  </div>
                </div>
                :
                <div>
                  <p className="results__naughtyOrNice nice" data-text="NICE">NICE</p>
                  <div className="trainTracks__container">
                    <img src={trainTracks} alt="train tracks" className="trainTracks" />
                    <img src={presentMineCart} alt="mine cart with presents" className="mineCart" />
                  </div>
                </div>
            }
            <CustomButton
              handleClick={() => setDisplay("intro")}
              text="Start Over"
            />
          </div>
      }
    </div>
  );
}

export default Generator;



