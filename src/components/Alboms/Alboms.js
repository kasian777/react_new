
import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {AlbomServise} from "../../services/albom.servise";


const Alboms = () => {
    let {id} = useParams();
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        AlbomServise.getByalbumsid(id).then(value => setAlbums(value))
    }, [id])
    console.log(albums)
    return (
        <div>
            <div>
                {
                    albums &&
                    (<div>
                        <div>{albums.id}</div>
                        <div>{albums.title}</div>
                        <Link to={`${id}/photos`}>
                            <button>photos</button>
                        </Link>
                    </div>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Alboms;