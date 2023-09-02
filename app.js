// extracting send button
const btn = document.querySelector("#btn");
const input = document.querySelector(".input");

input.addEventListener("input", () => {
  console.log(input.value.length);
  if (input.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});

const form = document.querySelector("#form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("button clicked");

  try {
    const response = await axios.post(
      "https://notification-app-aditya.onrender.com/home",
      {
        description: input.value,
      }
    );

    console.log("Response data:", response.data);

    // Clear the input field
    input.value = "";
  } catch (error) {
    console.error("Axios error:", error);
  }
});

// extracting input value on button click

// here you can attach any callbacks, interact with the web component API
let nc = document.getElementsByTagName("notification-center-component")[0];
nc.onLoad = () => console.log("hello world!");
