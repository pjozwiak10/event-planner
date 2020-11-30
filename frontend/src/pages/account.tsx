import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import Svg from '../components/account/Svg';
import SvgTwo from '../components/account/SvgTwo';
import Login from '../components/login/Login'; 


const Account = () => {
    return (
        <>
            <Svg/>
            <SvgTwo/>
            <Login/>
        </>
    )
}

export default Account
