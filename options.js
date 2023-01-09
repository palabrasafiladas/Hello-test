var url = "https://api-demo-hh.vercel.app/api/options";
var datos;

$.ajax({
  dataType: "json", //Tipo de datos que me devuelve el WS
  url: url, //La URL del WS
  data: datos, //En datos guardo el JSON que me devuelve el WS
  success: success // llamo a la funcion success
});

function success(datos) {
  var links = "";

  for (var i = 0; i < datos.length; i++) {

    datos[i].image

    console.log(datos[i].image)
    console.log(datos[i].label)
    console.log(datos[i].value)

    //<a href="https://api-demo-hh.vercel.app/api/send?email=test@example.com&option=datos[i].value" ></a>



    links = links +
      "<div class='card mb-3'>" +
      "<div class='row'>" +
      "<div class='col-md-2 ' >" +
      "<img src='" + datos[i].image + "' class='img' alt='...'>" +
      "</div>" +
      "<div class='col'>" +
      "<div>" +
      "<p>" + datos[i].label +
      " <img class='img-fluid ' class='icon-card' src='./Assets/icon-chevron-right.svg' alt='icon-card'>" +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

  }



  console.log(links);
  $("#cardOpctions").html(links);
};