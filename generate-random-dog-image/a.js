let URL1 = "https://cat-fact.herokuapp.com/facts";
let URL2 = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector("#img1");
let btn = document.querySelector("#btn1");

const getImage = async () => {
  let response = await fetch(URL2); //response is a promise
  let data = await response.json(); //data is promise
  image.setAttribute("src", data["message"]);
};

btn.addEventListener("click", getImage);
