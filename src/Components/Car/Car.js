import {useDispatch, useSelector} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car: {id, model, price, year}, getCarId}) => {
    const dispatch = useDispatch();
    const {info} = useSelector(state => state['carReducer'])
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px', gap: '20px'}}>
            <h1>{info}</h1>
            <div>

                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <button onClick={() => dispatch(deleteCar({id}))}>Delete</button>
        </div>
    )
}
export {Car}