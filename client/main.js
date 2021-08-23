document.getElementById("submit").onclick = function () {
    axios.post("http://localhost:4000/api/person/")
    .then(function (response) {
      document.getElementById("person").value = data
      console.log(phrase)
      // console.log(data)
      alert(data)
      
    })
  }

  document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
  };

  document.getElementById("jarjar").onclick = function () {
    axios.get("http://localhost:4000/api/jarjar/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
  };

  document.getElementById("batman").onclick = function () {
    axios.get("http://localhost:4000/api/batman/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
  };

  document.getElementById("trump").onclick = function () {
    axios.get("http://localhost:4000/api/trump/")
    .then(function (response) {
      const data = response.data;
      alert(data);
    });
  };

//   document.getElementById("beHappy").onclick = function () {
//     axios.post("http://localhost:4000/api/meme/")
//     .then(function (response) {
//       const data = response.data
//       let photo = document.createElement(p)
//       document.appendChild(photo)
//     });
//   };