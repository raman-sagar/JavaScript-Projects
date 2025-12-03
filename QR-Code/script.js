const imgBox = document.getElementsByClassName("imgBox")[0];
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = url + qrText.value;
    console.log(qrImage.src);
  } else {
    alert("Please Enter something");
  }
}

qrText.addEventListener("blur", () => {
  const label = document.getElementById("label");
  if (qrText.value.length > 0) {
    label.style.top = 0;
    label.style.backgroundColor = "antiquewhite";
  } else {
    label.classList.add("label");
  }
});
