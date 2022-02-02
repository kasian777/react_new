const Car = ({car: {id, model, year, price}, getCarId})=> {

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: '20px', gap: "20px"}}>
            <div>
                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <button onClick={()=>getCarId(id)}>Delete</button>
        </div>
    )

}
export default Car;