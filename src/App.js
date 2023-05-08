import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import img1 from "./images/rock.svg";
import img2 from "./images/paper.svg";
import img3 from "./images/scissor.svg";

function App() {
  const arr = [
    {
      address:img1,
      name:'rock'
    },
    {
      address:img2,
      name:'paper'
    },
    {
      address:img3,
      name:'scissor'
    },
  ];
  
  const [yourScore,setYourScore] = useState(0);
  const [computerScore,setComputerScore] = useState(0);
  const [image, setImage] = useState(img1);
  const [computerValue, setcomputerValue] = useState(img1);
  const displayOptions = () => {
    let options = document.querySelector(".options");
    if (options.style.display === "none") 
    {
      options.style.display = "block";
    } 
    else 
    {
      options.style.display = "none";
    }
  };
  
  const gameStart = (value) => {
    if(value==='rock')
    {
      setImage(img1)
    }
    else if(value==='paper')
    {
      setImage(img2)
    }
    else if(value==='scissor')
    {
      setImage(img3)
    }
    let index = Math.floor(Math.random()*3)
    let computer = arr[index].name;
    setcomputerValue(arr[index].address)
    if(value===computer)
    {
      console.log('draw');
    }
    else if(value==='rock')
    {
      if(computer==='scissor')
      {
        setYourScore(yourScore+1)
      }
      else
      {
        setComputerScore(computerScore+1)
      }
    }
    else if(value==='paper')
    {
      if(computer==='scissor')
      {
        setYourScore(yourScore+1)
      }
      else
      {
        setComputerScore(computerScore+1)
      }
    }
    else if(value==='scissor')
    {
      if(computer==='paper')
      {
        setYourScore(yourScore+1)
      }
      else
      {
        setComputerScore(computerScore+1)
      }
    }
    // options.style.display="none";
  }
  return (
    <div className="app">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <div className="options">
        <li className="option" onClick={()=>gameStart('rock')}>Rock</li>
        <li className="option" onClick={()=>gameStart('paper')}>Paper</li>
        <li className="option" onClick={()=>gameStart('scissor')}>Scissor</li>
      </div>
      <div className="score-board">
        <div className="score compute-score">
          Computer
          <h1>{computerScore}</h1>
        </div>
        <div className="score your-score">
          You
          <h1>{yourScore}</h1>
        </div>
      </div>
      <div className="game-area">
        <img src={computerValue} className="computer play-button"></img>
        <img
          onClick={() => displayOptions()}
          src={image}
          className="you play-button"
        ></img>
      </div>
    </div>
  );
}

export default App;
