import axios from "axios";
import BASE_URL from "../../../baseUrl";

export const fetchPlaylist = () => {
  return axios.get(`${BASE_URL}/admin/fetch-playlists`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};