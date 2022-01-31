import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const PostusersServise={
    getById:(id)=>axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}