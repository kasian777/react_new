import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const AlbomServise = {
    getAll:()=>axiosService.get(urls.album).then(value => value.data),
    getById:(id)=>axiosService.get(`${urls.albums}/${id}`).then(value => value.data)


}