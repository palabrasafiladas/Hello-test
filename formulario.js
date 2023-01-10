function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
};

var option = getUrlParameter('option');

$(document).ready(function () {
  $("#parametro").html("<input type='hidden' id='option' value='" + option + "'>");
});

async function enviarFormulario() {

  var mail   = $("#email").val();
  var opt    = $("#option").val();
  var email  = mail;
  var option = opt;

  
  var url    = "https://api-demo-hh.vercel.app/api/send?option="+opt+"&email="+mail;
  if (validateEmail() != true  )
  {
   return;
  }


  const config = {
      method: 'post',
      url: url
  }

  let res = await axios(config);

  //let data = res.data;
  //console.log(data);

  if (res.status == 200){
    window.location='send.html'
  }

};

