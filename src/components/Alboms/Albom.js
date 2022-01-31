const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div>
                <div>ID : {id}</div>
                <div>title : {title}</div>
            </div>
        </div>
    );

};
export default Album;