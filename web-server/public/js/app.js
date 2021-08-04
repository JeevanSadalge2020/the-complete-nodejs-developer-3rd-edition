console.log("client side JS file loaded");
pone = document.querySelector(".one");
ptwo = document.querySelector(".two");

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const locationSearched = document.querySelector("input").value;
  const url = `/weather?address=${locationSearched}`;

  fetch(url)
    .then(response => {
      response.json().then(data => {
        if (data.error) pone.textContent = data.error;
        else {
          console.log(data);
          ptwo.textContent = `You have serched weather forecast for a location ${data.location}. Weather is observed to be ${data.forecast} at a local time of ${data.observationTime}. The temperature observed is ${data.temperature} but it feels like ${data.feelsLikeTemperature}.`;
        }
      });
    })
    .catch(err => {
      ptwo.textContent = err;
    });
});
