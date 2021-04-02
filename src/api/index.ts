import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api.twitch.tv/helix",
  headers: {
    "Client-Id": "e4zdkev014hrur8exlhep61hlqns1d",
    Authorization: "Bearer 5ty02yvzqjp3a94uy2h7cxwrexbz39",
  },
});
