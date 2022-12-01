

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    //LISTENER de la WebApp
   // window.addEventListener('message', scan, true);
    //
   // document.getElementById("getPosition").addEventListener("click", getPosition);
   document.getElementById("prepareButton").addEventListener("click", prepare);
   document.getElementById("scanButton").addEventListener("click", scan);
   document.getElementById("mostrarButton").addEventListener("click", mostrar);
   document.getElementById("hideButton").addEventListener("click", hide);
   document.getElementById("stopButton").addEventListener("click", stopscan);

 }

function prepare(){
QRScanner.prepare(onDone); // show the prompt

function onDone(err, status){
  if (err) {
   // here we can handle errors and clean up any loose ends.
   console.error(err);
  }
  if (status.authorized) {
    // W00t, you have camera access and the scanner is initialized.
    // QRscanner.show() should feel very fast.
  } else if (status.denied) {
   // The video preview will remain black, and scanning is disabled. We can
   // try to ask the user to change their mind, but we'll have to send them
   // to their device settings with `QRScanner.openSettings()`.
  } else {
    // we didn't get permission, but we didn't get permanently denied. (On
    // Android, a denial isn't permanent unless the user checks the "Don't
    // ask again" box.) We can ask again at the next relevant opportunity.
  }
}
}
function scan() {
//QRScanner.scan(displayContents);
//window.QRScanner.show();
//alert(2 + 6);
  //   alert('scanbegin');
      // alert ('adentroScan ');

     QRScanner.scan(displayContents);
     // Make the webview transparent so the video preview is visible behind it.
     //QRScanner.show();
     QRScanner.show(function(status){
       console.log(status);
     });
     // Be sure to make any opaque HTML elements transparent here to avoid
     // covering the video.


}
function mostrar() {
     QRScanner.show(function(status){
       console.log(status);
     });
     // Be sure to make any opaque HTML elements transparent here to avoid
     // covering the video.
}
function hide() {
     QRScanner.hide(function(status){
       console.log(status);
     });
     
     // Be sure to make any opaque HTML elements transparent here to avoid
     // covering the video.
}
function stopscan() {
     //    alert ('adentroStopScan ');
         QRScanner.cancelScan(function(status){
             console.log(status);
             console.error(err._message);
         }
);

}

function displayContents(err, contents){
    // alert ('adentrodisplayContents ');

  if(err){
  console.error(err._message);
  console.log(status);
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
  console.log(status);
    // The scan completed, display the contents of the QR code:
    alert('The QR Code contains: ' + contents);
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

