const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let = "";

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    description = "Poxa, você está abaixo do peso!";
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "Parabéns!! Você está no peso ideal!";
  } else if (bmi > 25 && bmi <= 30) {
    description = "Comece a se cuidar, você está com sobrepeso!";
  } else if (bmi > 30 && bmi <= 35) {
    description = "Tome cuidado! Você está com obesidade moderada!";
  } else if (bmi > 35 && bmi <= 40) {
    description = "Tome bastante cuidado! Você está com obesidade severa!";
  } else {
    description = "Tome MUITO cuidado! Você está com obesidade mórbida!";
  }

  value.textContent = bmi.replace(".", ",");

  document.getElementById("description").textContent += description;
});
