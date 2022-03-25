import axios from "axios";
import appSettings from "../app_settings.json";

export function getMods() {
    return axios.get(`${appSettings.url}/api/menu`)
}