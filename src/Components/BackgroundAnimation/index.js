import './backgroundAnimation.scss';

function BackgroundAnimation() {
  const snowflakeAmount = 20;
  const smallSnowflakes = [...Array(snowflakeAmount)].map((e, i) => <div className="small" key={i}></div>)
  const mediumSnowflakes = [...Array(snowflakeAmount)].map((e, i) => <div className="medium" key={i}></div>)

  return (
    <div className="backgroundAnimation">
      <div className="snowing">
        <div className="smallSnow">
          { smallSnowflakes }
        </div>
        <div className="mediumSnow">
          { mediumSnowflakes }
        </div>
      </div>
      <div className="ground-d"></div>
      <div className="ground-a"></div>
      <div className="ground-b"></div>
      <div className="ground-c"></div>
    </div>
  )
}

export default BackgroundAnimation;

