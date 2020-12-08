import React from 'react';
import {Label, Input, Wrapper, Underline, Button, ForgotLink, RegisterLink, Form, SocialMedia} from './style';
import { useForm } from "react-hook-form"; 
import { StyledLeftArrowIcon } from '../global/StyledIcons';
 

type Inputs = {
    email: string,
    password: string,
};

export default function Login() {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const onSubmit = (data:Inputs) => console.log(data);

    return (
        <>
            <Wrapper>
            
                <h4>Zaloguj się </h4>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <div className="input-data">
                        <Input
                            name="Email"
                            ref={register({
                                required: true,
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                  message: 'Błędny email',
                                },
                              })}
                        />
                        <Label>Email</Label>
                        <Underline color={errors.email ? "#f54242" : "ccc"}></Underline>
                    </div>
                    <div className="input-data">
                        <Input
                            name="password"
                            ref={register({
                                required: true,
                                pattern: {
                                    value: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i,
                                    message: "Stwórz mocniejsze hasło"
                                }
                             })}
                        />
                        <Label>Hasło</Label>
                        <Underline color={errors.password ? "#f54242" : "ccc"}></Underline>
                    </div>
                    {/* {errors.password && <span>Błędne hasło</span>}
                    {errors.login && <span>Błędny email</span>} */}

                    <ForgotLink> Zapomniałem hasła</ForgotLink>

                    <div className="wrapper_button">
                        <RegisterLink>Rejestracja</RegisterLink>
                        <Button type="submit">
                                <StyledLeftArrowIcon/>
                        </Button>
                    </div>

                    <SocialMedia>
                        <div className="socialmedia-item">
                            <img src="images/socialmedia/google-logo.png" />
                        </div>
                        <div className="socialmedia-item">
                            <img src="images/socialmedia/twitter-logo.png" />
                        </div>
                        <div className="socialmedia-item">
                            <img src="images/socialmedia/facebook-logo.png" />
                        </div>
                    </SocialMedia>
                </Form>
            </Wrapper>
            <Wrapper>
                <Form>
                    <p>Wejdź i sprawdź największą bazę organizatorów imprez</p>
                    <img src="images/socialmedia/illustration-login.png" alt=""/>
                </Form>
    
            </Wrapper>
        </>
    )
}