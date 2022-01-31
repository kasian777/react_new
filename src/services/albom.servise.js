import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const AlbomServise = {
    getByalbumsid: (id) => axiosService.get(`${urls.albums}/${id}`).then(value => value.data),
    getByphotosid: (id) => axiosService.get(`/photos/${id}`).then(value => value.data)
}
