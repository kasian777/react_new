import {useForm} from "react-hook-form";


const FormDog = ({getFormDataDog}) => {

    const {handleSubmit, register, reset} = useForm()

    const submit = (data) => {
        getFormDataDog(data)
        reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <label>DOG:<input type="text"{...register('name')}/></label>
            <button>Save</button>
        </form>
    )
}

export default FormDog;