// var p = document.querySelector("p");
// navigator.geolocation.getCurrentPosition(position=>{
//     const a = position.coords;
//     console.log(a);
//     p.innerHTML = `Latitude:${latitude}<br>Longitude:${longitude}<br>Accuracy:${accuracy}<br>Speed:${speed}`
// });
    

setInterval(()=>{
    var p = document.querySelector("p");
    navigator.geolocation.getCurrentPosition(position=>{
        const a = position.coords;
        p.innerHTML = `Latitude:${a.latitude}<br>Longitude:${a.longitude}<br>Accuracy:${a.accuracy}<br>Speed:${a.speed}`;
    });
},1);

