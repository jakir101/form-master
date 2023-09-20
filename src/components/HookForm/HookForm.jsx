import UseInputState from "../../hooks/UseInputState";

const HookForm = () => {
    // const [name, handleNameChange] = UseInputState('rojoni');
    const emailState = UseInputState('example@gmail.com')

    const handleSubmit = e =>{
        // console.log('form data', name);
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                 
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;