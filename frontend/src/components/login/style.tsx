import React from 'react';
import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    
    @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
    height: 100vh;
    display:flex;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    margin-top: 2rem;
    font-family: 'Varela Round', sans-serif;
    margin-top: 5rem;

    h3, h4{
        max-width: 17rem;
        font-size: 1.8rem;
        color: #fff;
        margin-left: 0.9rem;
        margin-bottom: 1rem;
        
    }

    h4{
        font-size: 2.4rem;
        max-width: 21rem;
        margin-top: 0;
        margin-bottom: 5rem;
    }

    h3{
        color: #3D4149;
        position: absolute;
        top: 35.9rem;
        left: 1.6rem;
        font-size: 1.4rem;
    }

    .input-data{
        height: 40px;
        width: 100%;
        position: relative;
        margin: 3rem 0 0 1rem;

        input{
            height: 100%;
            width: 100%;
            border: none;
            font-size: 1.5rem;
            border-bottom: 2px solid silver;
            background-color: transparent;
          

        }

        input:focus{
            & + label {
                transform: translateY(-20px);
                font-size: 15px;
                color: #4158d0;
            }
        }
    }
`

export const Label = styled.label`
position: absolute;
bottom: 10px;
left: 0;
color: grey;
pointer-events: none;
transition: all 0.3s ease;
`

export const Input = styled.input`
.input:focus ~ .underline:before,
.input:valid ~ .underline:before{
  transform: scaleX(1);
}
`

export const Underline = styled.div`
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;

    &:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: #4158d0;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
    }
`

export const Button = styled.button`
    color: #fff;
    border: none;
    background-color: #3D4149;
    height: 4rem;
    width: 4rem;
    border-radius: 3rem;
    font-size: 1.8rem;
    position: absolute;
    right: 4rem;
    top: 36rem;
`