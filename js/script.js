//let api_key="GHIv7F0q1IoJFNNmjR5kEYbHmksRE7tg9h0uxl9G"
// var req = new XMLHttpRequest();
// //var url = "https://api.nasa.gov/planetary/apod?api_key=";
// var url_uranus="https://images-api.nasa.gov/search?q=uranus&media_type=image"


// //req.open("GET", url + api_key);
// req.open("GET", url);
// req.send();

// req.addEventListener("load", function(){
// 	//if(req.status == 200 && req.readyState == 4){
//   	var response = JSON.parse(req.responseText);
//     //console.log(response);
//     document.getElementById("title").textContent = response.collection.items[0].data[0].title;
//     //document.getElementById("date").textContent = response.date;
//     document.getElementById("pic").src = response.collection.items[0].links[0].href;
//     document.getElementById("explanation").textContent = response.collection.items[0].data[0].description;
  
// })

const url_saturn = "https://images-api.nasa.gov/search?q=saturn&media_type=image"
const xhrs = new XMLHttpRequest()

function onRequestHandler_s() {
  if (this.status == 200 && this.readyState == 4) {
  const data =JSON.parse(this.response)
  console.log(data);
  const numeroAleatorio = Math.floor(Math.random() *100)
   const images = data.collection.items[numeroAleatorio]
   const description = data.collection.items[numeroAleatorio].data[0].description
   console.log(description)
   console.log(images)
  }
}
xhrs.addEventListener("load", onRequestHandler_s) 
xhrs.open("GET", url_saturn)
xhrs.send();


const url_jupiter = "https://images-api.nasa.gov/search?q=jupiter&media_type=image"
const xhrj = new XMLHttpRequest()

function onRequestHandler_j() {
  if (this.status == 200 && this.readyState == 4) {
  const data =JSON.parse(this.response)
  console.log(data);
    const numeroAleatorio = Math.floor(Math.random() *100)
   const images = data.collection.items[numeroAleatorio]
   const description = data.collection.items[numeroAleatorio].data[0].description
   console.log(description )
   console.log( images )
  }
}
xhrj.addEventListener("load", onRequestHandler_j) 
xhrj.open("GET", url_jupiter)
xhrj.send();