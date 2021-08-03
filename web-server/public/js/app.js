console.log("client side JS file loaded");
pone = document.querySelector(".one");
ptwo = document.querySelector(".two");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const locationSearched = document.querySelector("input").value;
  const url = `http://localhost:3000/weather?address=${locationSearched}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.error) pone.textContent = data.error;
      else {
        // console.log("Location:", data.Location);
        // console.log("Weather:", data.Forecast);
        // console.log("Temperature:", data.Temperature);
        ptwo.textContent = `Location:${data.Location}--- Weather:${data.Forecast}--- Temperature:${data.Temperature}`;
      }
    });
  // .catch(err => console.log(err));
});
