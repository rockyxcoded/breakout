const container = document.querySelector(".container");
let containerDimesion = container.getBoundingClientRect();

const gameover = document.createElement("div");
gameover.textContent = "Start Game";
gameover.style.position = "absolute";
gameover.style.color = "white";
gameover.style.lineHeight = "300px";
gameover.style.textAlign = "center";
gameover.style.fontSize = "3em";
gameover.style.textTransform = "uppercase";
gameover.style.backgroundColor = "red";
gameover.style.width = "100%";
gameover.addEventListener("click", () => {});
container.appendChild(gameover);

const ball = document.createElement("div");
ball.style.position = "absolute";
ball.style.width = "20px";
ball.style.height = "20px";
ball.style.backgroundColor = "white";
ball.style.borderRadius = "25px";
ball.style.backgroundImage = "url('assets/images/ball.png')";
ball.style.backgroundSize = "20px 20px";
ball.style.top = "70%";
ball.style.left = "50%";
ball.style.display = "none";
container.appendChild(ball);

const paddle = document.createElement("div");
paddle.style.position = "absolute";
paddle.style.backgroundColor = "white";
paddle.style.height = "20px";
paddle.style.width = "100px";
paddle.style.borderRadius = "25px";
paddle.style.bottom = "30px";
paddle.style.left = "50%";
container.appendChild(paddle);
