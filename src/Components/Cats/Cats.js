import Cat from "../Cat/Cat";

const Cats = ({cats, getCatId}) => {
  return(
      <div>
          {cats.map(cat=><Cat key={cat.id} cat={cat} getCatID={getCatId}/> )}
      </div>
  );
};
export default Cats;