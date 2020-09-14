document.getElementById("reset").onclick = () => {
      document.querySelector(".score").innerHTML = 0;
}

document.getElementById("score").onclick = () => {   
      document.querySelector(".score").innerHTML = randomInteger(1, 10);
}

function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
}