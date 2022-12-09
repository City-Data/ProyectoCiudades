mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZGVsZW9uZXoiLCJhIjoiY2xhdGQxZDd6MmJmMzN4bGJieDMyZmJleCJ9.bIFVpM-jk-poGfoeuFgnZg'

function provincias(){
    let map = new mapboxgl.Map({

        container:'map',
        style: 'mapbox://styles/aledeleonez/clbguep5f005i14nnhi5ab6j9',
        center:[-3.7025600,40.4165000],
        zoom: 3
    
    })
}

function ciudades(){
    let map = new mapboxgl.Map({

        container:'map',
        style: 'mapbox://styles/aledeleonez/clbguv4fq006c14o0p9w9itdo',
        center:[-3.7025600,40.4165000],
        zoom: 6
    
    })
}

