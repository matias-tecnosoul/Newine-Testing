// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //function messageCallback(msg){
  //Your code here
  //  alert("We got a TEST\n");
  //}
  //LISTENER de la WebApp
    window.addEventListener('message', scan2, true);

}

//document.getElementById("scanButton").addEventListener("click", scan2);

function scan() {
  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}
function scan2() {
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
                      /*  alert("Contenido QR\n" +
                               result.text + "\n"
                            );*/
                          //      iframe.contentWindow.location = 'https://tecnosoul.com.ar/newine/test-app.php?qr='+result.text;
                              iframe.contentWindow.location = 'https://newineapp.com.ar/recibirqr.php?qr='+result.text;

                        //xmlhttp.open("GET", "php/getCadeaubon.php?id=" + result.text, true);
                      //  xmlhttp.open("GET", "https://tecnosoul.com.ar/newine/test-app.php?id="+ result.text, true);

                    //    xmlhttp.send();
            },
            function (error) {
                alert("Scanning failed: " + error);
            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : true, // iOS and Android
                showTorchButton : true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: true, // Android, save scan history (default false)
                prompt : "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    }
//document.getElementById("testajax").addEventListener("click", httpGet);
function httpGet(yourUrl){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", yourUrl,);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function openBrowser() {
   var url = 'https://tecnosoul.com.ar/newine/';
   var target = '_blank';
   var options = ' location = no, toolbar=no, hideurlbar=yes ';
   var ref = cordova.InAppBrowser.open(url, target, options);

   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}
