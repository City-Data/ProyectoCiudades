let apiKey = '1f09c3289d5e6962befd9312188d325925fd1d50398a25b46e5d2625ebe57f95'

/*let url = `https://apiv1.geoapi.es/comunidades?type=JSON&key=${apiKey}&sandbox=0`
const api = new XMLHttpRequest()
api.open('GET', url, true)
api.send()
api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#prov')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<h3>${item.COM}</h3>`
        }
    }
}*/

const andalucia = new XMLHttpRequest()
andalucia.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=01&type=JSON&key=${apiKey}&sandbox=0`, true)
andalucia.send()
andalucia.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#andalucia')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const aragon = new XMLHttpRequest()
aragon.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=02&type=JSON&key=${apiKey}&sandbox=0`, true)
aragon.send()
aragon.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#aragon')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}