const datos = new XMLHttpRequest()
datos.open('GET', `https://ciudades-22713-default-rtdb.europe-west1.firebasedatabase.app/features.json`, true)
datos.send()
datos.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText)
        console.log(datos)
        let ciudad = document.querySelector('#ciudad')
        ciudad.innerHTML = ''
        let poblacion = document.querySelector('#poblacion')
        poblacion.innerHTML = ''

        for(let item of datos){
            ciudad.innerHTML += `<li>${item.properties.nombre}</li>`
        }

        for(let item of datos){
            poblacion.innerHTML += `<li>${item.properties.poblacion} habitantes</li>`
        }
    }
}