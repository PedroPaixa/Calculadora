let screen = document.querySelector("#screen");

function insert(valor) {
  switch (valor) {
    case "C":
      screen.value = "";
      break;

    case "(":
      screen.value += "*(";
      break;

    case ")":
      screen.value += ")";
      break;

    case "/":
      screen.value += "/";
      break;

    case "7":
      screen.value += "7";
      break;

    case "8":
      screen.value += "8";
      break;

    case "9":
      screen.value += "9";
      break;

    case "X":
      screen.value += "*";
      break;

    case "4":
      screen.value += "4";
      break;

    case "5":
      screen.value += "5";
      break;

    case "6":
      screen.value += "6";
      break;

    case "-":
      screen.value += "-";
      break;

    case "1":
      screen.value += "1";
      break;

    case "2":
      screen.value += "2";
      break;

    case "3":
      screen.value += "3";
      break;

    case "+":
      screen.value += "+";
      break;

    case "Delete":
      let delet = screen.value.substring(0, screen.value.length - 1);
      screen.value = delet;
      break;

    case "0":
      screen.value += "0";
      break;

    case ",":
      screen.value += ",";
      break;

    case "=":
      let resultado = "";
      resultado = eval(screen.value.replace(/,/g, "."));
      screen.value = (`${resultado}`).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      break;

    default:
  }
}

document.addEventListener("click", async(evento)=>{
  let size = screen.value.length;
  if(size >= 20){
    screen.style.fontSize = "1rem"
  }else
  if(size >= 8){
    screen.style.fontSize = "2rem"
  }
  else{
    screen.style.fontSize = "5rem"
  }
})