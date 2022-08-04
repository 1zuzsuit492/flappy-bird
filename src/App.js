import styled from "styled-components";
import { useEffect } from "react";

//props
const birdSize = 20;
const gameHeight = 500;
const gameWidth = 500;

function App() {
  return (
    <Div>
      <GameBox height={gameHeight} width={gameWidth}>
      <Bird size={birdSize} />
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
  top: ${(props) => props.size}px;
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