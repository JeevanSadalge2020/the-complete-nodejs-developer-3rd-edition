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
          ptwo.textContent = `Location:${data.Location}--- Weather:${data.Forecast}--- Temperature:${data.Temperature}`;
        }
      });
    })
    .catch(err => {
      ptwo.textContent = err;
    });
});
