

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    //LISTENER de la WebApp
    window.addEventListener('message', scan, true);
    //
   // document.getElementById("getPosition").addEventListener("click", getPosition);
}

document.getElementById("scanButton").addEventListener("click", scan);

function scan() {
//QRScanner.scan(displayContents);
//window.QRScanner.show();
//alert(2 + 6);
        window.QRScanner.scan(displayContents);
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

