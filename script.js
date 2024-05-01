let inp = document.querySelector("#inp");
let img = document.querySelector("#img");
let msg = document.querySelector(".massage");
let download = document.querySelector("#download");

async function myFun() {
  let value = inp.value;
  if (value) {
    msg.innerHTML = `QR code generating for ${value}`;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    inp.value = "";

    let promise = new Promise((resolve, reject) => {
      img.onload = () => {
        resolve();
      };
    });
    await promise;

    msg.innerHTML = `QR code generated for ${value}`;

    // Create a blob URL for the image
    let blob = await fetch(img.src).then((res) => res.blob());
    let url = window.URL.createObjectURL(blob);

    // Set the href and download attributes for the download link
    download.href = url;
    download.download = "qrcode.png";

    // Display the download link
    download.style.display = "block";
  } else {
    alert("Please enter something to generate QR code");
  }
}
