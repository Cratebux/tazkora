import axios from "axios";

const config = {
  headers: {
    Authorization: process.env.NEXT_PUBLIC_USER_TOKEN,
    "Content-Type": "application/json",
  },
};

export const handleTwitterAuth = async (router) => {
  const url = "https://tazkora-3.onrender.com/api/users/twitter/connect";

  try {
    const response = await axios.get(url, config);
w
    console.log("Success:", response.data.url);
    router.push(response.data.url);
  } catch (error) {
    if (error.response) {
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network Error:", error.request);
    } else {
      // Other errors (e.g., request setup issue)
      console.error("Error:", error.message);
    }
  }
};

export const removeTwitterAuth = async () => {
  const url = "https://tazkora-3.onrender.com/api/users/twitter/disconnect";

  try {
    const response = await axios.post(url, {}, config);
    console.log("Success:", response.data);
    alert(response.data.message);
  } catch (error) {
    console.error("Error connecting to twitter", error.message);
  }
};

export const handleDiscordAuth = async (router) => {
  const url = "https://tazkora-3.onrender.com/api/users/discord/connect";

  try {
    const response = await axios.get(url, config);

    console.log("Success:", response.data.url);
    router.push(response.data.url);
  } catch (error) {
    if (error.response) {
      console.error(
        "Server Error:",
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network Error:", error.request);
    } else {
      // Other errors (e.g., request setup issue)
      console.error("Error:", error.message);
    }
  }
};

export const removeDiscordAuth = async () => {
  const url = "https://tazkora-3.onrender.com/api/users/discord/disconnect";

  try {
    const response = await axios.post(url, {}, config);
    console.log("Success:", response.data);
    alert(response.data.message);
  } catch (error) {
    console.error("Error connecting to twitter", error.message);
  }
};
