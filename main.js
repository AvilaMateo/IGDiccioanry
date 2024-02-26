
try {
  var tabla = document.getElementById("tabla");
  var tablaContainer = document.querySelector(".data");

  tablaContainer.addEventListener("scroll", function () {
    var scrollTop = tablaContainer.scrollTop;
    tabla.querySelector("thead").style.transform = "translateY(" + scrollTop + "px)";
  });

  // Obtiene todas las filas dentro del tbody
  var filas = tabla.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  var cantidadRegistros = filas.length;
  var cantRow = document.getElementById("cantRow");
  cantRow.textContent = cantidadRegistros + (cantidadRegistros != 1 ? " Registros" : " Registro");

} catch (error) {

}

/*actualizar valor del footer*/
var valFooter = document.getElementById("valorFooter");
valFooter.textContent = "Información Gerencial LTDA - Ultima actualizacion: 26/10/2023"