function calcularSumaYProducto() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    var num4 = parseFloat(document.getElementById("numero4").value);

    var suma = num1 + num2;

    var producto = num3 * num4;

    document.getElementById("suma").textContent = suma;
    document.getElementById("producto").textContent = producto;

    document.getElementById("resultados").style.display = "block";
}