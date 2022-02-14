
fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "7aa265e76bmshdcf1fcc95a6549bp1800bajsn9484e3cccd6d"
	}
})
.then(response => {
	console.log(response);
  response.json()
  .then(obj =>{
    console.log(obj)
  })
})
.catch(err => {
	console.log(err);
});




//const url = "https://api.api-futebol.com.br/v1/ao-vivo"

// let headers = new Headers();

// headers.append('Athorization', 'Bearer test_7d3235ddea58b531a4a414a266cc16')
// console.log(headers);

//const options = {
 // headers: {'Authorization' : 'Bearer test_7d3235ddea58b531a4a414a266cc16'},
//}


/////////////////////////////////////////////////////////

//function buscarPartidas() {
 // fetch(url, options)
 // .then(resposta => {
  //  resposta.json()
 //   .then(obj => {
  //  console.log(obj)
 //   mostrarPartidas(obj);
 // })
//})
//.catch()
//}


//function mostrarPartidas(partidas) {
//  console.log(partidas, "Isso é partidas")

 // for (i=0; i<partidas.length; i++){
   // var placar = document.createElement('h3');
   // placar.innerText = partidas[i].placar;
   /// var escudoMandante = document.createElement('img');
   // escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)
  //  var escudovisitante = document.createElement('img');
   // escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
   // var horas = document.createElement('h3');
   // horas.innerText = partidas[i].hora_realizacao
   // document.getElementById('partidasAoVivo').append(placar, escudoMandante,escudovisitante,horas);
 // }
//}

//buscarPartidas();
//





const imgs = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs.style.transform = `translateX(${-idx1 * 865}px)`;

}

setInterval(carrossel, 5000);
/////////////////////////////////////////////////////////////////////////////////


const imgss = document.getElementById("pcimg");
const img2 = document.querySelectorAll("#pcimg img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgss.style.transform = `translateX(${-idx2 * 350}px)`;

}

setInterval(carrosseu, 5000);

