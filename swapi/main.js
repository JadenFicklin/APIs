//get html elements
let getButton = document.querySelector(".residents-button");
let card = document.querySelector(".info-here");
let nameCard = document.querySelector(".name");
let heightCard = document.querySelector(".height");
let weightCard = document.querySelector(".weight");

const displayName = (name) => {
  let t = document.createTextNode(name);
  nameCard.appendChild(t);
};

const displayHeight = (height) => {
  let t = document.createTextNode(height);
  heightCard.appendChild(t);
};

const displayWeight = (weight) => {
  let t = document.createTextNode(weight);
  weightCard.appendChild(t);
};

//api
const dittoInfo = () =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => {
      displayName(res.data.name);
      displayHeight(res.data.height);
      displayWeight(res.data.weight);
    })
    .catch("error");

//what will happen when button is clicked
// function button() {
//   getDarthVader();
// }

//function once button is clicked
getButton.addEventListener("click", dittoInfo);

// <div class="info-here">
// <p class="name"></p>
// <p class="height"></p>
// <p class="weight"></p>
// <img class="picture" src="" />
// </div>
