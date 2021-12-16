$( function() {
    var availableTags = [
      "Aspirador de pó residencial",
      "Assadeira grande",
      "Assadeira pequena",
      "Batedeira de bolo",
      "Cafeteira elétrica pequena uso doméstico",
      "Cafeteira elétrica uso comercial",
      "Chuveiro elétrico 127V",
      "Chuveiro elétrico 220V",
      "Espremedor de frutas",
      "Ferro elétrico automático de passar roupa",
      "Ferro elétrico simples de passar roupa",
      "Fogão comum com acendedor",
      "Fogão elétrico de 4 bocas potência por cada queimador",
      "Fogão elétrico de 6 bocas potência por cada queimador médio",
      "Fogão elétrico de 6 bocas potência por cada queimador grande",
      "Forno de microondas",
      "Forno elétrico de embutir",
      "Geladeira Comum",
      "Geladeira Duplex",
      "Impressora comum",
      "Liquidificador doméstico",
      "Lâmpada Incandescente de 15W",
      "Lâmpada Incandescente de 20W",
      "Lâmpada Incandescente de 25W",
      "Lâmpada Incandescente de 40W",
      "Lâmpada Incandescente de 60W",
      "Lâmpada Incandescente de 100W",
      "Lâmpada Incandescente de 150W",
      "Lâmpada Incandescente de 200W",
      "Lâmpada Incandescente de 250W",
      "Lâmpada Fluorescente de 20W",
      "Lâmpada Fluorescente de 40W",
      "Máquina de lavar roupas com aquecimento",
      "Máquina de secar roupas",
      "Micro forno elétrico",
      "Panela elétrica",
      "Sanduicheira",
      "Secador de cabelos grande",
      "Secador de cabelos pequeno",
      "Secador de roupa residencial",
      "Televisor colorido",
      "Torneira elétrica",
      "Ventilador grande",
      "Ventilador médio",
      "Ventilador pequeno",
      "Vídeo game"
     ];

$( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
function completar_dados(){
   var dadosAparelho = [
      "Aspirador de pó residencial;600",
      "Assadeira grande;1000",
      "Assadeira pequena;500",
      "Batedeira de bolo;100",
      "Cafeteira elétrica pequena uso doméstico;600",
      "Cafeteira elétrica uso comercial;1200",
      "Chuveiro elétrico 127V;4400",
      "Chuveiro elétrico 220V;6000",
      "Espremedor de frutas;200",
      "Ferro elétrico automático de passar roupa;1000",
      "Ferro elétrico simples de passar roupa;500",
      "Fogão comum com acendedor;90",
      "Fogão elétrico de 4 bocas potência por cada queimador;1500",
      "Fogão elétrico de 6 bocas potência por cada queimador médio;2100",
      "Fogão elétrico de 6 bocas potência por cada queimador grande;2700",
      "Forno de microondas;750",
      "Forno elétrico de embutir;4500",
      "Geladeira Comum;250",
      "Geladeira Duplex;300",
      "Impressora comum;90",
      "Liquidificador doméstico;200",
      "Lâmpada Incandescente de 15W;15",
      "Lâmpada Incandescente de 20W;20",
      "Lâmpada Incandescente de 25W;25",
      "Lâmpada Incandescente de 40W;40",
      "Lâmpada Incandescente de 60W;60",
      "Lâmpada Incandescente de 100W;100",
      "Lâmpada Incandescente de 150W;150",
      "Lâmpada Incandescente de 200W;200",
      "Lâmpada Incandescente de 250W;250",
      "Lâmpada Fluorescente de 20W;20",
      "Lâmpada Fluorescente de 40W;40",
      "Máquina de lavar roupas com aquecimento;1000",
      "Máquina de secar roupas;3500",
      "Micro forno elétrico;1000",
      "Panela elétrica;1200",
      "Sanduicheira;640",
      "Secador de cabelos grande;1250",
      "Secador de cabelos pequeno;700",
      "Secador de roupa residencial;1100",
      "Televisor colorido;200",
      "Torneira elétrica;2000",
      "Ventilador grande;250",
      "Ventilador médio;200",
      "Ventilador pequeno;70",
      "Vídeo game;10"
     ];

  for (var i = 0; i < dadosAparelho.length; i++) {

    if(dadosAparelho[i].split(';')[0]==document.getElementById("tags").value)
    {
      //Atribui o nome do aparelho
      document.getElementById("deviceName").value = dadosAparelho[i].split(';')[0]
      //Atribui a potencia do aparelho
      document.getElementById("devicePot").value =dadosAparelho[i].split(';')[1]

    }
   // more statements
}

}