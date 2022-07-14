import axios from "axios";

const api = axios.create({
    baseURL:"http://ip da maquina:3000"
});

export default Api