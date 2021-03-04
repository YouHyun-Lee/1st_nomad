const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"

function handleClick() {
  const currentColor = title.style.color;
  console.log(title.style.color);
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
