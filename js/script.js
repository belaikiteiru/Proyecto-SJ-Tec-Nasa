var saturno= document.getElementById('saturno');
saturno.addEventListener("click", function(){
  obtenerInfo("saturn");
});

var urano= document.getElementById('urano');
urano.addEventListener("click", function(){
    obtenerInfo("uranus");
});

var neptuno= document.getElementById('neptuno');
neptuno.addEventListener("click", function(){
    obtenerInfo("neptune");
});

var jupiter= document.getElementById('jupiter');
jupiter.addEventListener("click", function(){
    obtenerInfo("jupiter");
});



function obtenerInfo(name){    
    
    const url_planeta = "https://images-api.nasa.gov/search?q="+name+"&media_type=image"
    const xhrs = new XMLHttpRequest()

    function onRequestHandler_s() {
      if (this.status == 200 && this.readyState == 4) {
       const data =JSON.parse(this.response)
       console.log(data);
       const numeroAleatorio = Math.floor(Math.random() *100)    
                   
       document.getElementById("title").textContent=data.collection.items[numeroAleatorio].data[0].title
       document.getElementById("pic").src =data.collection.items[numeroAleatorio].links[0].href;
       document.getElementById("explanation").textContent = shortText(data.collection.items[numeroAleatorio].data[0].description)
       
      }
    }
    xhrs.addEventListener("load", onRequestHandler_s) 
    xhrs.open("GET", url_planeta)
    xhrs.send();

    const shortText = function (text) {
        var newText = text.substring(0, 30);
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
      
        if (text.length > 30) {
          return newText + "...";
        }
        return newText;
      };

}


