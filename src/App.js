
import './App.css';
import {FormEvent, useState} from "react";
import { useNavigate } from "react-router-dom";
import {
    Route,
    Routes,
    Link
} from 'react-router-dom';
import Registration from "./Registration";
// in render

function App() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [repeat,setRepeatPassword] = useState('');
    const [repeatError,setRepeatPasswordError] = useState('');

    const isValid = (): boolean => {
        let result = true;
        console.log("isValid", login.length);
        setLoginError("");
        if (login.length < 6) {
            console.log("Error")
            setLoginError("слишком короткий логин");
            result = false;
        }
        else if(login.length > 20){
            setLoginError("слишком длинный логин");
            result = false;
        }
        else if(/[^a-zA-Z0-9]/.test(login)){
            setLoginError('недопустимые символы в логине');
            result = false

        }
        if (password.length === 0) {
            setPasswordError('Слишком короткий пароль!');
            result = false
        }
        if (password !== repeat){
            setRepeatPasswordError('Пароли не совпадают');
            result = false;
        }
        return result;
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid()) {

            console.log("it's done");
        }

    };

    return <>

        <Routes>
            <Route path="/registration" element={<Registration />}/>
        </Routes>

        <button onClick={()=> navigate('/registration')}>
            Registration
        </button>
    </>;
}

export default App;
