import axios from "axios";

export default axios.create({
    baseURL: "https://getwaitlist.com/api/v1/waitlists",
});