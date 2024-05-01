let inp = document.querySelector("#inp");
let img = document.querySelector("#img");
let msg = document.querySelector(".massage");

async function myFun() {
  let value = inp.value;
  if (value) {
    msg.innerHTML = `qr code generating... for ${value}`;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    inp.value = "";

    let promise = new Promise((resolve, reject) => {
      img.onload = () => {
        resolve();
      };
    });
    await promise;
    msg.innerHTML = `qr code generated for ${value}`;
  } else {
    alert("please enter something to generate qr code");
  }
}
