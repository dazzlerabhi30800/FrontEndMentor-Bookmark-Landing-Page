import React, {useState} from 'react';
import './Style.css'

function SignUp() {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState(false); 
    const [errorText, setErrorText] = useState('');

    function handleChange(e) {
        setInputText(e.target.value);
    }

    function onSubmit() {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const errorSpan = document.querySelector('.input--wrapper .error');
        if(inputText !== '' && inputText.match(mailFormat)) {
            setError(prevState => prevState = false);
            errorSpan.style.display = 'block';
            setErrorText('Your Email has been verified'); 
        }
        else{
            setError(prevState => prevState = true);
            errorSpan.style.display = "block";
            setErrorText("Whoops are you sure it's an email"); 
        }
    }

    return(
        <div className="signup--conatainer flex flex-col justify-center items-center gap-4 bg-indigo-600 py-4 text-white">
            <span className='font-small uppercase tracking-wider '>35,000+ already joined</span>
            <h6 className='font-medium text-2xl text-center px-12'>Stay up-to-date with what we're doing</h6>
            <div className={error ? "input--wrapper flex flex-col bg-red-500 p-1 rounded-md gap-2 w-3/4" : "input--wrapper flex flex-col bg-transparent p-1 rounded-md gap-2 w-3/4"}>
                <div className="input--container flex bg-white rounded-sm py-1 justify-between px-2 items-center">
                <input type="email" placeholder='Enter your Email' onChange={handleChange} value={inputText} className='p-1 px-2 text-black rounded-sm w-full' />
                <img src="../images/icon-error.svg" className={error ? 'error h-6' : 'h-6'} alt="" />
                </div>
                <span className="error text-sm pl-2 italic hidden transition duration-300 ease-in-out">{errorText}</span>
            </div>
            <button onClick={onSubmit} className='bg-red-500 py-2 px-4 text-xl rounded-md font-medium cursor-pointer transition duration-300 ease-in-out hover:bg-red-600 w-3/4'>Contact</button>
        </div>
    )
}

export default SignUp;