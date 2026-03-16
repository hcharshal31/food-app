import {useQuery} from "@tanstack/react-query"
import getData from "./productAPI"

const useMenu = () => {
    return useQuery({
        queryKey: ["menu"],
        queryFn: getData,
    })
}

export default useMenu;