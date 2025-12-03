const button = document.querySelector("#btn1");
const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");

const apiEndPoint2 = "https://api.opencagedata.com/geocode/v1/json";
const apiKey = "064e35df90124b38aaf51ccce9478901";

const getUserCurrentAddress = async (latitude, longitude) => {
  let query = `${latitude},${longitude}`;

  let apiURL = `${apiEndPoint2}?key=${apiKey}&q=${query}&pretty=1`;

  const res = await fetch(apiURL);
  const data = await res.json();

  // console.log(data);
  // console.log(data.results[0].components);

  const { city, state, postcode, country } = data.results[0].components;

  para2.innerHTML = `<mark>User Address:</mark> ${city},${state},${postcode},${country}`;
  para3.innerHTML =
    "<mark>Formitted Address:</mark> " + data.results[0].formatted;
};

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        para1.textContent = `The latitude: ${latitude} and  longitude: ${longitude}`;

        getUserCurrentAddress(latitude, longitude);
      },
      (error) => {
        console.log(error.message);
        para1.textContent = error.message;
      }
    );
  }
});
