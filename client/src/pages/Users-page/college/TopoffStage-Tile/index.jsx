import styled from "styled-components";

function TopOffStageTile({ offstage, index }) {
  return (
    <StyledWrapper>
      <div className="container h-44 ">
        <div className="canvas">
          <div className="tracker tr-1" />
          <div className="tracker tr-2" />
          <div className="tracker tr-3" />
          <div className="tracker tr-4" />
          <div className="tracker tr-5" />
          <div className="tracker tr-6" />
          <div className="tracker tr-7" />
          <div className="tracker tr-8" />
          <div className="tracker tr-9" />
          <div id="card">
            <div className="card-content">
              <div className="card-glare" />
              <div className="cyber-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="title text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {index + 1}
              </div>
              <div className="glowing-elements">
                <div className="glow-1" />
                <div className="glow-2" />
                <div className="glow-3" />
              </div>
              <div className="subtitle px-1 absolute top-5 w-full flex flex-col gap-1 sm:gap-3 sm:mt-3   text-center">
                <div>
                  <span className="text-sm sm:text-lg font-subHeading md:text-xl lg:text-2xl leading-2">
                    {offstage?.offStagecollegeName}
                  </span>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl">
                  <span className="text-white font-heading font-black ">
                    {offstage?.offStagepoints} pts
                  </span>
                </div>
              </div>
              <div className="card-particles">
                <span />
                <span />
                <span /> <span />
                <span />
                <span />
              </div>
              <div className="corner-elements">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="scan-line" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: full;

    transition: 200ms;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: linear-gradient(45deg, #1a1a1a, #262626);
    border: 2px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .title {
    opacity: 0;
    transition: 300ms ease-in-out;
    position: absolute;
    letter-spacing: 4px;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow: 0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
  }

  .subtitle {
    text-align: center;

    letter-spacing: 2px;
    transform: translateY(30px);
    color: rgba(255, 255, 255, 0.6);
  }

  .highlight {
    color: #00ffaa;
    margin-left: 5px;
    background: linear-gradient(90deg, #5c67ff, #ad51ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  /* Hover effects */
  .tracker ~ #card .title {
    opacity: 1;
    transform: translateY(-10px);
  }

  #card::before {
    content: "";
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.1) 0%,
      rgba(0, 162, 255, 0.05) 50%,
      transparent 100%
    );
    filter: blur(20px);
    opacity: 0;
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }

  .tracker:hover ~ #card::before {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas: "tr-1 tr-2 tr-3 tr-4 tr-5";
  }

  .card-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 300ms;
  }

  .cyber-lines span {
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(92, 103, 255, 0.2),
      transparent
    );
  }

  .cyber-lines span:nth-child(1) {
    top: 20%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite;
  }

  .cyber-lines span:nth-child(2) {
    top: 40%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1s;
  }

  .cyber-lines span:nth-child(3) {
    top: 60%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite 2s;
  }

  .cyber-lines span:nth-child(4) {
    top: 80%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1.5s;
  }

  .corner-elements span {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(92, 103, 255, 0.3);
  }

  .corner-elements span:nth-child(1) {
    top: 10px;
    left: 10px;
    border-right: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(2) {
    top: 10px;
    right: 10px;
    border-left: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(3) {
    bottom: 10px;
    left: 10px;
    border-right: 0;
    border-top: 0;
  }

  .corner-elements span:nth-child(4) {
    bottom: 10px;
    right: 10px;
    border-left: 0;
    border-top: 0;
  }

  .scan-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(92, 103, 255, 0.1),
      transparent
    );
    transform: translateY(-100%);
    animation: scanMove 2s linear infinite;
  }

  @keyframes lineGrow {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
  }

  @keyframes scanMove {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  /* Modyfikacja istniejących styli */
  #card .card-glare {
    opacity: 1;
  }

  .corner-elements span {
    transition: all 0.3s ease;
  }

  #card .corner-elements span {
    border-color: rgba(92, 103, 255, 0.8);
    box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
  }
`;

export default TopOffStageTile;
