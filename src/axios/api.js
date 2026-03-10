import axios from "axios";

const api = axios.create({
    baseURL: "https://raw.githubusercontent.com"
});

const getData = async () => {
    try{
        const response = await api.get("/saksham-accio/f2_contest_3/main/food.json");
        return response.data;
    } catch(error){
        console.log(error);
    } 
}

export default getData;