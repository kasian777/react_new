import Dog from "../Dog/Dog";

const Dogs = ({dogs, getDogID}) => {
    return(
        <div>
            {dogs.map(dog=><Dog key={dog.id} dog={dog} getDogID={getDogID}/> )}
        </div>
    );
};
export default Dogs;