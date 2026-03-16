import {api} from "../../../axios/api"

const getData = async () => {
    try{
        const response = await api.get("/saksham-accio/f2_contest_3/main/food.json");
        return response.data;
    } catch(error){
        console.log(error);
    } 
}

export default getData;