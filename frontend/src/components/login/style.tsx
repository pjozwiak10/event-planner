import styled from 'styled-components';

export const Wrapper = styled.div`

    height: 100vh;
    display:flex;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    padding-top: 5rem;

    h3, h4{
        max-width: 17rem;
        font-size: 1.8rem;
        color: #fff;
        margin-left: 0.9rem;
        margin-bottom: 1rem;
    }

    h4{
        font-size: 3.4rem;
        max-width: 30rem;
        margin-top: 6rem;
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
        margin: 3rem 0 0 0;

    }

    input{
        height: 100%;
        width: 100%;
        border: none;
        font-size: 2rem;
        border-bottom: 2px solid silver;
        background-color: transparent;
        color: #f1f1f1;
    }

    input:invalid {
        outline: 0;  
      }


      input:focus~label  {
        font-size: 1.6rem;
        top: -2.2rem;
      }
 
 
`

export const Label = styled.label`
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    color: #d3d3d3;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    cursor: text;
    font-size: 2rem;
    opacity: 0.8;
    z-index: -1;
`

export const Input = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    font-size: 2rem;
    border-bottom: 2px solid silver;
    background-color: transparent;
    color: #f1f1f1; 
`

export const Underline = styled.div`
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    background-color: ${props => props.color || '#cccccc'}; 

    &:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
    }
`

export const Button = styled.button`
    color: #fff;
    border: none;
    background: linear-gradient(90deg, rgba(20,16,16,1) 15%, rgba(61,65,73,1) 70%);
    height: 8rem;
    width: 8rem;
    border-radius: 6rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0rem 2rem 0 0;
 
    transform: rotate(180deg);

    i{
        font-size: 2.5rem; 
    }
    
`

export const ForgotLink = styled.a`
    font-size: 1.5rem;  
    color: #f5f5f5;
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;

    &:hover{
        color: #f70776;
        cursor: pointer;
    }
`

export const RegisterLink= styled.a` 
    font-weight: bold;
    color: #680747;  
    font-size: 2.4rem;
    margin-right: 4rem;

    &:hover{
        color: #f70776;
        cursor: pointer;
    }
`


export const Form= styled.form` 
    width: 100%;

    .wrapper_button{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 16rem;

    }
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 4rem;
   
    .socialmedia-item{
        border: 0.1px solid #ccc;
        padding: 2rem;
        border-radius: 5rem;
        cursor: pointer;
        background-color: #fff;
        transition: 0.5s all;


        &:hover{
            background-color: #f1f1f1;
        }
    }



`