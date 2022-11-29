

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //cambiar backbutton BEGIN
/*document.addEventListener("backbutton", function(e){
        e.preventDefault();
        //  var testvar = "testcontenido";
        //   var URL = $.mobile.path.parseUrl(window.location).toString().toLowerCase();
        //alert(URL);
          //   navigator.app.backHistory();
          //alert('Back Button is Pressed! TEST' + activePage );
          if (confirm("¿Querés cerrar Newine?"))
            {
              navigator.app.exitApp();
          }

      }, false);*/
//cambiar backbutton END

    //LISTENER de la WebApp
    window.addEventListener('message', scan, true);
    //
   // document.getElementById("getPosition").addEventListener("click", getPosition);
}

document.getElementById("scanButton").addEventListener("click", scan);

function scan() {
QRScanner.scan(displayContents);

    }

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}

//tests
var scanButtonTest = document.getElementById('menuScanButtonTest');
if(scanButtonTest){
  scanButtonTest.addEventListener('click', triggerScanTest);
//  scanButtonTest.addEventListener('click', scan);
}

function triggerScanTest() {
    //window.Scan.postMessage("scan");
    /* Scan.postMessage('Hello World being called from Javascript code');
    window.scan.postMessage('Hello from JS'); */
     alert(5 + 6);
}


function getPosition() {
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

function watchPosition() {
   var options = {
      maximumAge: 3600000,
      timeout: 3000,
      enableHighAccuracy: true,
   }
   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}
