import React from 'react';
import {Label, Input, Wrapper, Underline, Button} from './style';


function Login() {
    return (
        <Wrapper>
            <h4>Stwórz swoją wymarzoną imprezę</h4>
            <form action="">
                <div className="input-data">
                    <Input placeholder="Login"/>
                    <Underline ></Underline>
                </div>
                <div className="input-data">
                    <Input placeholder="Hasło"/>
                    <Underline ></Underline>
                </div>
                <h3>Zaloguj się</h3>
                <Button type="submit">></Button>
            </form>
        </Wrapper>
    )
}

export default Login
