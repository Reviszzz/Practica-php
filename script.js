//obtener los elementos
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault(); //prevenir el comportamineto por defecto
  statusTxt.style.color = "#0d6efd";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); // crear nuevo objeto xml
  xhr.open("POST", "data.php", true); // mandando una peticion a el archivo php
  xhr.onload = () => {
    // ajax loaded
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf("el email y el mensaje son requeridos") ||
        response.indexOf("Por favor ingrese un email valido") ||
        response.indexOf("hubo un error al envirar el mensaje")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
    }
  };
  let fomrData = new FormData(form); // creando un nuevo formularop para mandar la data del formulario
  xhr.send(fomrData); // mandar la data del Form;
};
