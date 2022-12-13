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

const asturias = new XMLHttpRequest()
asturias.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=03&type=JSON&key=${apiKey}&sandbox=0`, true)
asturias.send()
asturias.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#asturias')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const baleares = new XMLHttpRequest()
baleares.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=04&type=JSON&key=${apiKey}&sandbox=0`, true)
baleares.send()
baleares.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#baleares')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const canarias = new XMLHttpRequest()
canarias.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=05&type=JSON&key=${apiKey}&sandbox=0`, true)
canarias.send()
canarias.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#canarias')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const cantabria = new XMLHttpRequest()
cantabria.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=06&type=JSON&key=${apiKey}&sandbox=0`, true)
cantabria.send()
cantabria.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#cantabria')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const lamancha = new XMLHttpRequest()
lamancha.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=07&type=JSON&key=${apiKey}&sandbox=0`, true)
lamancha.send()
lamancha.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#lamancha')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const leon = new XMLHttpRequest()
leon.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=08&type=JSON&key=${apiKey}&sandbox=0`, true)
leon.send()
leon.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#leon')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const cat = new XMLHttpRequest()
cat.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=09&type=JSON&key=${apiKey}&sandbox=0`, true)
cat.send()
cat.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#cat')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const valencia = new XMLHttpRequest()
valencia.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=10&type=JSON&key=${apiKey}&sandbox=0`, true)
valencia.send()
valencia.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#valencia')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}

const extremadura = new XMLHttpRequest()
extremadura.open('GET', `https://apiv1.geoapi.es/provincias?CCOM=11&type=JSON&key=${apiKey}&sandbox=0`, true)
extremadura.send()
extremadura.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos.data)
        let resultado = document.querySelector('#extremadura')
        resultado.innerHTML = ''

        for(let item of datos.data){
            resultado.innerHTML += `<li>${item.PRO}</li>`
        }
    }
}
