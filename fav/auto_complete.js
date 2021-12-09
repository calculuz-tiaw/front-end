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
      "Aspirador de pó residencial;600W",
      "Assadeira grande;1000W",
      "Assadeira pequena;500W",
      "Batedeira de bolo;100W",
      "Cafeteira elétrica pequena uso doméstico;600W",
      "Cafeteira elétrica uso comercial;1200W",
      "Chuveiro elétrico 127V;4400W",
      "Chuveiro elétrico 220V;6000W",
      "Espremedor de frutas;200W",
      "Ferro elétrico automático de passar roupa;1000W",
      "Ferro elétrico simples de passar roupa;500W",
      "Fogão comum com acendedor;90W",
      "Fogão elétrico de 4 bocas potência por cada queimador;1500W",
      "Fogão elétrico de 6 bocas potência por cada queimador médio;2100W",
      "Fogão elétrico de 6 bocas potência por cada queimador grande;2700W",
      "Forno de microondas;750W",
      "Forno elétrico de embutir;4500W",
      "Geladeira Comum;250W",
      "Geladeira Duplex;300W",
      "Impressora comum;90W",
      "Liquidificador doméstico;200W",
      "Lâmpada Incandescente de 15W;15W",
      "Lâmpada Incandescente de 20W;20W",
      "Lâmpada Incandescente de 25W;25W",
      "Lâmpada Incandescente de 40W;40W",
      "Lâmpada Incandescente de 60W;60W",
      "Lâmpada Incandescente de 100W;100W",
      "Lâmpada Incandescente de 150W;150W",
      "Lâmpada Incandescente de 200W;200W",
      "Lâmpada Incandescente de 250W;250W",
      "Lâmpada Fluorescente de 20W;20W",
      "Lâmpada Fluorescente de 40W;40W",
      "Máquina de lavar roupas com aquecimento;1000W",
      "Máquina de secar roupas;3500W",
      "Micro forno elétrico;1000W",
      "Panela elétrica;1200W",
      "Sanduicheira;640W",
      "Secador de cabelos grande;1250W",
      "Secador de cabelos pequeno;700W",
      "Secador de roupa residencial;1100W",
      "Televisor colorido;200W",
      "Torneira elétrica;2000W",
      "Ventilador grande;250W",
      "Ventilador médio;200W",
      "Ventilador pequeno;70W",
      "Vídeo game;10W"
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