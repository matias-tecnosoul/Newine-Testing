// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //cambiar backbutton
  
  document.addEventListener('backbutton', backButtonPressed, false );
  function backButtonPressed(e) {

    if($.mobile.activePage.is('#login_page')){
        e.preventDefault();
    }
    else {
        if (confirm("Are you sure you want to logout?")) {
            /* Here is where my AJAX code for logging off goes */
        }
        else {
            return false;
        }
    }
        //     e.preventDefault();
        //      console.log('boton back-');

      /*        if (mobile.activePage.attr('id') == "home") {
                              //  navigator.app.exitApp();
                               alert('Back Button is Pressed! IF TRUE');
                             }
                  else {
                               alert('Back Button is Pressed! else');
                              //  navigator.app.backHistory();
                             }
*/

            //  var whichPageId = mobile.activePage.attr( "id" );
              alert('Back Button sin if!');
            //  return false;
}

    if($.mobile.activePage.is('#login_page')){
        e.preventDefault();
    }
    else {
        if (confirm("Are you sure you want to logout?")) {
            /* Here is where my AJAX code for logging off goes */
        }
        else {
            return false;
        }
    }


    //LISTENER de la WebApp
    window.addEventListener('message', scan, true);

}

//document.getElementById("scanButton").addEventListener("click", scan);

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
