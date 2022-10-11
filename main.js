let displayCoordinates = document.getElementById("display-coordinates")
let deviceLongitude = null
let deviceLatitude = null

const myLocation = () => {
  console.log("myLocation function called")
  console.log("Long:" + deviceLongitude)
  console.log("Lat:" + deviceLatitude)
  if(navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, failedPosition, {timeout:0})
  } else {
    displayCoordinates.innerHTML = "Your location is blocked. Please enable location permission."
  }
}

const showPosition = (coordinates) => {
  console.log("showPosition function called")
  deviceLongitude = coordinates.coords.longitude
  deviceLatitude = coordinates.coords.latitude
  console.log("Long:" + deviceLongitude)
  console.log("Lat:" + deviceLatitude)

  displayCoordinates.innerHTML =  "Longitude:  " + deviceLongitude + "<br/>  Latitude: " + deviceLatitude;
}

const failedPosition = (err) => {
  switch(err.code)
  {
    case err.PERMISSION_DENIED: alert("User refused to share geolocation data"); 
    break;

    case err.POSITION_UNAVAILABLE: alert("Current position is unavailable"); 
    break;

    case err.TIMEOUT: alert("Timed out"); console.log('does it work') 
    break;

    default: alert("Unknown error"); 
    break; 
  }
 }

