const Dog = ({dog:{id, name}, getDogID}) => {
    return(
        <div>
            <div>Name:{name}</div>
            <button onClick={()=>getDogID(id)}>Delete</button>
        </div>
    );
};

export default Dog;