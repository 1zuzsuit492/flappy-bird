import styled from "styled-components";
import { useEffect, useState } from "react";

//props
const birdSize = 20;
const gameHeight = 500;
const gameWidth = 500;
const gravity = 6;
const jumpHeight = 100;
const obstacleWidth = 40;

function App() {
//position of bird will be at 250px
//top position = 0;
// bottom position = 480px;
const [birdPosition, setBirdPosition] = useState(250);
const [gameStart, setGameStart] = useState(false);
//obstacle states
const [obstacleHeight, setObstacleHeight] = useState(100); 
const [obstacleLeft, setObstacleLeft] = useState(gameWidth - obstacleWidth);


//The setInterval() function is commonly used to set a delay for functions that are executed again and again, such as animations.

//clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval()


useEffect(() => {
  let timeId;
if(gameStart && birdPosition < gameHeight - birdSize){
  timeId = setInterval(() => {
  setBirdPosition(birdPosition => birdPosition + gravity);
}, 24); //execute this line of code after a 24ms delay continuously.
}

return () => {
  clearInterval(timeId)
};
}, [birdPosition, gameStart]); //bird position stays stuck in the center until screen is clicked.

  const handleClick = () => {
  let newBirdPosition = birdPosition - jumpHeight; //makes the bird go up.
  if(!gameStart){
    setGameStart(true)
  }
  else if(newBirdPosition < 0){
    setBirdPosition(0) //bird is at top of screen
  }
  else {
    setBirdPosition(newBirdPosition);
  }
  };

  return (
    <Div onClick={handleClick}>
      <GameBox height={gameHeight} width={gameWidth}>
        <Obstacle
        top={0}
        width={obstacleWidth}
        left={obstacleLeft}
        height={obstacleHeight} />
      <Bird size={birdSize} top={birdPosition} />
      </GameBox>
    </Div>
  );
}


export default App;

const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
  `;

  const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    `;

    const GameBox = styled.div`
    height: ${(props) => props.width}px;
    width: ${(props) => props.height}px;
    background-color: blue;
    `;

  const Obstacle = styled.div`
  position: relative;
  background-color: green;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.top}px;
  `;