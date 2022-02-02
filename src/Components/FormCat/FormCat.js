import {useForm} from "react-hook-form";


    const FormCat = ({getFormDataCat}) => {

        const {handleSubmit, register, reset} = useForm()

        const submit = (data) => {
            getFormDataCat(data)
            reset()
        }
        return(
            <form onSubmit={handleSubmit(submit)}>
                <label>CAT:<input type="text"{...register('name')}/></label>
                <button>Save</button>
            </form>
        )
}

export default FormCat;