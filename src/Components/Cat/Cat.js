const Cat = ({cat:{id, name}, getCatID}) => {
  return(
      <div>
          <div>Name:{name}</div>
          <button onClick={()=>getCatID(id)}>Delete</button>
      </div>
  );
};

export default Cat;