
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Albom from "./Albom";
import {AlbomServise} from "../../services/albom.servise";

const Alboms = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        AlbomServise.getById(id).then((value => setAlbums([...value])))
    }, [id])
    return (
        <div>
            <div>
                {albums.map(album => <Albom key={album.id}
                                             post={album}/>)}
            </div>
        </div>
    )
}



export default Alboms;