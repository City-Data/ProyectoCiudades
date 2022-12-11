mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlZGVsZW9uZXoiLCJhIjoiY2xhdGQxZDd6MmJmMzN4bGJieDMyZmJleCJ9.bIFVpM-jk-poGfoeuFgnZg'

    let prov = new mapboxgl.Map({
        container:'provincias',
        style: 'mapbox://styles/aledeleonez/clbguep5f005i14nnhi5ab6j9',
        center:[-3.7025600,40.4165000],
        zoom: 3
    
    })

    

    function provincias(){
        return prov
    }

    function ciudades(){
        let ciu = new mapboxgl.Map({
            container:'ciudades',
            style: 'mapbox://styles/aledeleonez/clbguv4fq006c14o0p9w9itdo',
            center:[-3.7025600,40.4165000],
            zoom: 6
        
        })
    }


   


