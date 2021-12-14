const api_key = "GHIv7F0q1IoJFNNmjR5kEYbHmksRE7tg9h0uxl9G";

function NasaRequest(sol, ms) {
    return new Promise((resolve, reject) => {
        const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+"&api_key="+api_key;
        const url2="https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key="+api_key;
        console.log("Peticion enviada a:"+url2);

        fetch(url2)
        
        .then(res => { 

            if(res.status === 200){
                res.json().then(data => {
                    //if(data.length === 0) {
                    if(data.resources===""){
                        console.log("esperando llamada...");
                        setTimeout(() => {
                            resolve(NasaRequest(sol-1, 1000)); 
                        }, ms);
                    } else {
                        console.log(data)
                       // document.getElementById('nasa').innerHTML="<a href='"+data.photos[0].img_src+"'>link del objeto</a>";
                       // console.log(data.photos[0].id)
                       document.getElementById('nasa').innerHTML="<a href='"+data.url+"'>link del objeto</a>";
                        resolve(data);
                    }
                })        
            } else {
                reject("ERROR");
            }

        })
        .catch((error)=> reject(error))
    })
}

async function init() {
    var currentValue = await NasaRequest(2178, 1000);
    console.log("currentValue:", currentValue); 
}

init();