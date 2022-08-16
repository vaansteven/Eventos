let eventos = document.getElementById("eventos");

let selectedEvent;

eventos.addEventListener("change", (event) => {
  selectedEvent = event.target.value;
});

let cantidad = document.getElementById("cantidad");


const precioEntradas = new Map();
precioEntradas.set('evento1', 200);
precioEntradas.set('evento2', 400);
precioEntradas.set('evento3', 600);
precioEntradas.set('evento4', 800);


cantidad.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let total = 0;
    

    total = precioEntradas.get(selectedEvent) == undefined? 0: precioEntradas.get(selectedEvent)  * parseInt(cantidad.value);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `$ ${total}`;
  }


});



    // switch (selectedEvent) {
    //   case "evento1": {
    //     total = parseInt(cantidad.value) * 200;
    //     break;
    //   }
    //   case "evento2": {
    //     total = parseInt(cantidad.value) * 400;
    //     break;
    //   }
    //   case "evento3": {
    //     total = parseInt(cantidad.value) * 600;
    //     break;
    //   }
    //   case "evento4": {
    //     total = parseInt(cantidad.value) * 800;
    //     break;
    //   }

    //   default:
    //     break;
    // }

