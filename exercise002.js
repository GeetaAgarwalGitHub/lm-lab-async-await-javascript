import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const fetchData1 = async (apiEndPoint) => {
  try {
    const asyncResponse = await fetch(apiEndPoint);
    const jsonResponse = await asyncResponse.json();
    console.log("Yay!Async Fetch successful with response: ");
    console.log(jsonResponse);
  } catch (error) {
    console.log("Boo. Async Fetch failed with response ");
    console.log(error);
  }
};

fetchData(jsonTypicode);
fetchData1(jsonTypicode);
