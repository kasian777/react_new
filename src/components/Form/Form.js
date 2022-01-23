import {useState} from 'react';

const Form = ({getFilter}) => {
    let [form,setForm] = useState({name:'', username:'', email: ''});

    function formHandler(e) {
        const eventData = {...form, [e.target.name]:e.target.value}
        setForm({...form, ...eventData})
    }

    function onSubmit(e) {
        e.preventDefault()
        getFilter(form)

    }

    return (
        <div>
            <form>
                <label> name <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label> username <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label> email <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>click</button>
            </form>
        </div>
    );
};

export default Form;