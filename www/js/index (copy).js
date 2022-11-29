

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
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                        var xmlhttp;
                        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                            xmlhttp = new XMLHttpRequest();
                        } else { // code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        xmlhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                              //  cadeaubon = JSON.parse(xmlhttp.responseText);
                                document.getElementById("deviceready").innerHTML = this.responseText;
                                }
                        }
                        //alert("Contenido QR\n" + result.text + "\n");
                          iframe.contentWindow.location = 'https://newinetest.com.ar/mobile/Scan/read/'+result.text;
                            // funcionando previo  iframe.contentWindow.location = 'https://newinetest.com.ar/mobile/Scan/read/'+result.text;
                        //xmlhttp.open("GET", "php/getCadeaubon.php?id=" + result.text, true);
                      //  xmlhttp.open("GET", "https://tecnosoul.com.ar/newine/test-app.php?id="+ result.text, true);

                    //    xmlhttp.send();
            },
            function (error) {
                alert("Error de escaneo: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt : "Ubica el código QR en el área", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
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
