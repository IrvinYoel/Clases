let btnModal = document.getElementById("btn-modal");
let miModal = document.getElementById("miModal");

let bsModal = new bootstrap.Modal(miModal);

btnModal.addEventListener("click", function () {
  bsModal.show();
});

let objeto = {
  name: "sebastian",
  metodo: function () {
    console.log("Hola Mundo!");
  },
};

objeto.metodo();
