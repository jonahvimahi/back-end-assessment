// none of the code below that is commented out is working

// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const hobby = document.querySelector("#hobby");
// const goal = document.querySelector("#goal");
const goals = document.getElementById('goals')
const priority = document.getElementById('priority-dropdown')
// document.getElementById("submit").onclick = function () {
//   axios.post("http://localhost:4000/api/person/").then(function (response)

//     const phrase = `What's up ${firstName} ${lastName}?? You're the best at ${hobby} you will for sure ${goal}!!`;

//     document.getElementById("person").value = data;
//     console.log(phrase);
//     // console.log(data)
//     alert(data);
//   });
// };

// get compliment button
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
// get fortune button
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
// jar-jar binks quote
document.getElementById("jarjar").onclick = function () {
  axios.get("http://localhost:4000/api/jarjar/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
// batman quote
document.getElementById("batman").onclick = function () {
  axios.get("http://localhost:4000/api/batman/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
// donald trump quote
document.getElementById("trump").onclick = function () {
  axios.get("http://localhost:4000/api/trump/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById('kanye').onclick = function () {
  axios.get('https://api.kanye.rest').then(function (response) {
    const data = response.data.quote
    alert(data + ' -Kanye mf West')
  })
}
// Was gonna try to use this but i never made a git ignore before i pushed so now im screwed

// gifBtn.addEventListener("click", () => {
//   while(gifSection.firstchild) {
//     const gif = document.createElement("img");
//     gif.setAttribute("src", res.data.data.image.original.url);
//     gif.setAttribute("alt", "Hey");
//     gif.setAttribute("id","gif");
//     gifSection.appendChild(gif);
//   }
// })

//   document.getElementById("beHappy").onclick = function () {
//     axios.post("http://localhost:4000/api/meme/")
//     .then(function (response) {
//       const data = response.data
//       let photo = document.createElement(p)
//       document.appendChild(photo)
//     });
//   };
