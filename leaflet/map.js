let myMap = L.map('myMap').setView([19.374390875916195, -99.18527649204451], 13)

L.tileLayer(`http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg`, {
    maxZoom: 18,
}).addTo(myMap);



let marker = L.marker([19.374390875916195, -99.18476150795547]).addTo(myMap)

let iconMarkerI = L.icon({
    iconUrl: 'logo-ibby.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let iconMarkerL = L.icon({
    iconUrl: 'logo-lni.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})


let iconMarkerB = L.icon({
    iconUrl: 'logo-bunko.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})
let iconMarker = L.icon({
    iconUrl: 'marker.png',
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([19.374390875916195, -99.18476150795547], { icon: iconMarkerI }).addTo(myMap)
let marker3 = L.marker([19.422988252256328, -99.16081616931851], { icon: iconMarkerB }).addTo(myMap)




navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos
        const { latitude, longitude } = coords
        L.marker([latitude, longitude], { icon: iconMarker }).addTo(myMap)

        setTimeout(() => {
            myMap.panTo(new L.LatLng(latitude, longitude))
        }, 5000)
    },
    (error) => {
        console.log(error)
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })