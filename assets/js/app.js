const container = document.querySelector(".container");
let containerDimension = container.getBoundingClientRect();

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
gameover.addEventListener("click", startGame);
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

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37) paddle.left = true;
  if (e.keyCode === 39) paddle.right = true;
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 37) paddle.left = false;
  if (e.keyCode === 39) paddle.right = false;
});

const player = {
  gameover: true,
};

function startGame() {
  if (player.gameover) {
    player.gameover = false;
    gameover.style.display = "none";
    player.score = 0;
    player.lives = 3;
    ball.style.display = "block";
    positionBricks(30);
    updatePlayerScore();
    window.requestAnimationFrame(update);
  }
}

function positionBricks(num) {
  let skip = false;
  let row = {
    x: (containerDimension.width % 100) / 2,
    y: 50,
  };

  for (let x = 0; x < num; x++) {
    if (row.x > containerDimension.width - 100) {
      row.y += 50;
      if (row.y > (containerDimension.height / 2)) {
        skip = true;
      }
      row.x = (containerDimension.width % 100) / 2;
    }
    row.count = x;
    if (!skip) {
      createBrick(row);
    }
    row.x += 100;
  }
}

function createBrick(pos) {
  const div = document.createElement("div");
  div.setAttribute("class", "brick");
  div.style.backgroundColor = randomColor();
  div.textContent = pos.count + 1;
  div.style.left = pos.x + "px";
  div.style.top = pos.y + "px";
  container.appendChild(div);
}

function randomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

function updatePlayerScore() {
  document.querySelector(".score").textContent = player.score;
  document.querySelector(".lives").textContent = player.lives;
}

function update() {
  let pCurrent = paddle.offsetLeft;

  if (paddle.left) {
    pCurrent -= 5;
  }
  if (paddle.right) {
    pCurrent += 5;
  }

  paddle.style.left = pCurrent + "px";
  window.requestAnimationFrame(update);
}
