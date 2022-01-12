//get html elements
let getButton = document.querySelector(".residents-button");
let section = document.querySelector(".info-here");

const displayName = (name) => {
  let t = document.createTextNode(name);
  section.appendChild(t);
};

//api
const getDarthVader = () =>
  axios
    .get("https://swapi.dev/api/people/4")
    .then((res) => {
      displayName(res.data.name);
    })
    .catch("err");

//function once button is clicked
getButton.addEventListener("click", getDarthVader);
