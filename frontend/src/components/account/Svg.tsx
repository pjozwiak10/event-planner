import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Svg1, Svg2 } from './styledAccount';

const Svg = () => {

    const outputRangeSVG1 = [
        `
      m 58.878414,15.714509 c 34.583631,-2.380445 87.679806,-28.043205 103.975396,2.280392 8.46898,15.759505 -14.0608,35.364494 -29.16504,45.09809 C 110.1651,78.252305 97.435484,88.393253 82.231911,104.19227 69.820386,117.08989 66.247262,138.9299 50.405499,147.36582 39.239243,153.31198 23.525325,155.1624 12.417684,149.10936 -8.7430695,137.57797 -23.374981,110.69971 -23.517876,86.767955 -23.662537,62.540362 -7.9015265,37.157017 12.105715,23.233645 25.031742,14.238209 43.121678,16.799071 58.878414,15.714509 Z
      
      `,
        `
        m 101.9677,-17.547396 c 25.34082,-0.668127 62.17666,4.113829 70.71349,27.982768 7.44124,20.805693 -19.96625,39.54121 -32.18885,57.94928 C 128.73447,86.092811 118.65553,106.52592 101.13072,118.55537 85.463187,129.30994 64.408427,141.97195 46.625737,135.27058 32.583461,129.97878 35.252191,105.61452 23.001017,96.948646 7.9443641,86.29831 -23.706378,102.16168 -31.0774,85.25605 -39.98283,64.831211 -13.533969,42.66814 3.0342864,27.769359 30.005864,3.515529 65.707524,-16.591374 101.9677,-17.547396 Z `
    ]; 

    const clip_path_variants = {
        open: {
            d: outputRangeSVG1[0]
        },
        closed: {
            d: outputRangeSVG1[1]
        }
    };
 


    return (

        <>
            <Svg1>  
                    <svg
                        id="home__svg" 
                        viewBox="10 40 100 260 "
                        fill="url(#myGradient)"
                    > 
                            <motion.path
                                className="stars_clip"
                                id="a"
                                d="m 58.878414,15.714509 c 34.583631,-2.380445 87.679806,-28.043205 103.975396,2.280392 8.46898,15.759505 -14.0608,35.364494 -29.16504,45.09809 C 110.1651,78.252305 97.435484,88.393253 82.231911,104.19227 69.820386,117.08989 66.247262,138.9299 50.405499,147.36582 39.239243,153.31198 23.525325,155.1624 12.417684,149.10936 -8.7430695,137.57797 -23.374981,110.69971 -23.517876,86.767955 -23.662537,62.540362 -7.9015265,37.157017 12.105715,23.233645 25.031742,14.238209 43.121678,16.799071 58.878414,15.714509 Z
                                "
                                variants={clip_path_variants}
                                initial={"open"}
                                animate={"closed"} 
                                transition={{
                                    duration: 9,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />    
                            <linearGradient id="myGradient" >
                            <stop offset="0%"  stopColor="#FDAD3F" />
                            <stop offset="100%" stopColor="#FEB053" />
                            </linearGradient> 
                    </svg>  
            </Svg1>
        </>
    )
}

export default Svg
