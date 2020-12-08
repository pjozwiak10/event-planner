import React, { useContext, useEffect } from 'react';
import { motion } from "framer-motion";
import { SvgDownStyle } from './style';  
import { Media } from '../../utils/createAppMedia';

const SvgDown = () => { 

    const outputRangeSVG2 = [
        `
        m -2.2678571,171.5119 c 8.1878446,9.51611 17.2129091,20.7769 29.4821411,23.43452 17.261952,3.7391 34.880525,-6.61376 51.404763,-12.85118 15.921283,-6.00983 33.987973,-10.7717 45.357133,-23.43453 11.19206,-12.46557 12.03127,-31.27095 18.14286,-46.86905 5.73569,-14.638704 7.68421,-31.473996 17.38691,-43.845234 C 168.0927,56.998051 189.99024,57.213782 193.5238,43.755951 198.19005,25.984222 185.39458,4.0295172 170.08928,-6.1369048 144.46022,-23.160805 108.55213,-12.117812 77.863095,-9.9166664 51.785593,-8.0462791 21.715696,-11.181227 0.75595236,4.4464281 -17.403866,17.986449 -25.234701,42.830149 -30.238094,64.922619 c -3.953326,17.455901 -2.119862,36.146991 1.511904,53.672611 1.652105,7.97248 5.521423,15.35142 9.071428,22.67858 5.069515,10.46341 9.8036346,21.42464 17.3869049,30.23809 z
          `,
        `
        m -20.410714,173.02381 c 9.668654,11.42779 21.8357973,22.54971 36.285712,26.45833 23.961549,6.48146 50.447032,0.0227 74.083335,-7.55952 23.213577,-7.44664 51.434077,-15.10232 63.499997,-36.28572 7.7334,-13.57706 -9.81947,-34.14133 -0.75595,-46.86905 9.84539,-13.825681 36.18293,-4.07289 48.38095,-15.874995 C 213.2288,81.141582 219.72196,62.121288 218.47023,45.267856 217.02538,25.814221 206.38292,5.188477 190.5,-6.1369048 163.2467,-25.569981 124.50531,-28.159578 91.470238,-22.767857 66.103498,-18.627701 47.151879,3.6133407 23.434524,13.517857 -1.6445762,23.991046 -40.845725,14.167831 -54.42857,37.708333 c -9.684686,16.784581 10.01085,37.527498 12.85119,56.696426 2.07359,13.994271 -0.715254,28.689331 3.023809,42.333341 3.574092,13.04202 9.408389,25.96207 18.142857,36.28571 z
        ` ];
 

    const clip_path_variants2 = {
        open: {
            d: outputRangeSVG2[0]
        },
        closed: {
            d: outputRangeSVG2[1]
        }
    };
 



    return (

        <>
            <Media lessThan={'laptop'}>
                <SvgDownStyle> 
                        <svg
                            id="home" 
                            xmlns="http://www.w3.org/1000/svg"
                            viewBox = "10 40 100 260"
                            fill="url(#myGradient-1)"
                        > 
                    {/* 10 40 100 260 */}
                    {/*  */}

                                <motion.path
                                    className="stars_clip2"
                                    id="aa2a"
                                    d="m -2.2678571,170.75595 c 16.3064991,12.04607 31.2236531,30.57398 51.4047601,32.50595 12.390451,1.18616 24.283352,-6.90785 34.773811,-13.60714 13.818949,-8.82489 25.742796,-20.86273 35.529756,-34.01786 7.93753,-10.66921 10.77008,-24.46276 18.14286,-35.52976 8.4254,-12.64704 22.82621,-21.112425 29.48214,-34.773809 7.09959,-14.571972 13.29267,-31.790284 9.82738,-47.624999 C 173.34808,21.510423 161.47567,6.4243484 147.41071,-2.3571429 121.12364,-18.769541 86.214038,-25.612928 55.940476,-18.988095 34.907196,-14.385334 17.809507,2.4021356 3.0238095,18.053571 -12.43899,34.421753 -29.179678,53.235984 -32.505951,75.505952 c -2.925325,19.58555 12.885264,37.775958 15.119047,57.452378 0.910017,8.01594 -4.012093,16.80936 -0.755953,24.19048 2.813013,6.37663 10.2691865,9.46597 15.8749999,13.60714 z  "
                                    variants={clip_path_variants2}
                                    initial={"open"}
                                    animate={"closed"} 
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                /> 
                                <linearGradient id="myGradient-1" >
                                <stop offset="0%"  stopColor="#141010" />
                                <stop offset="100%" stopColor="#f70776" />
                                </linearGradient> 
                        </svg> 
                </SvgDownStyle>
            </Media>
            <Media greaterThan={'mobile'}>
                <SvgDownStyle> 
                            <svg
                                id="home" 
                                xmlns="http://www.w3.org/1000/svg"
                                viewBox = "-35 -50 210 1600"
                                fill="url(#myGradient-1)"
                            > 
                        {/* 10 40 100 260 */}
                        {/* -35 -50 210 1600 */}

                                    <motion.path
                                        className="stars_clip2"
                                        id="aa2a"
                                        d="m -2.2678571,170.75595 c 16.3064991,12.04607 31.2236531,30.57398 51.4047601,32.50595 12.390451,1.18616 24.283352,-6.90785 34.773811,-13.60714 13.818949,-8.82489 25.742796,-20.86273 35.529756,-34.01786 7.93753,-10.66921 10.77008,-24.46276 18.14286,-35.52976 8.4254,-12.64704 22.82621,-21.112425 29.48214,-34.773809 7.09959,-14.571972 13.29267,-31.790284 9.82738,-47.624999 C 173.34808,21.510423 161.47567,6.4243484 147.41071,-2.3571429 121.12364,-18.769541 86.214038,-25.612928 55.940476,-18.988095 34.907196,-14.385334 17.809507,2.4021356 3.0238095,18.053571 -12.43899,34.421753 -29.179678,53.235984 -32.505951,75.505952 c -2.925325,19.58555 12.885264,37.775958 15.119047,57.452378 0.910017,8.01594 -4.012093,16.80936 -0.755953,24.19048 2.813013,6.37663 10.2691865,9.46597 15.8749999,13.60714 z  "
                                        variants={clip_path_variants2}
                                        initial={"open"}
                                        animate={"closed"} 
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    /> 
                                    <linearGradient id="myGradient-1" >
                                    <stop offset="0%"  stopColor="#141010" />
                                    <stop offset="100%" stopColor="#f70776" />
                                    </linearGradient> 
                            </svg> 
                    </SvgDownStyle>
            </Media>


        </>
    )
}

export default SvgDown


    // #141010 - ciemny
    // #680747 - fiolet
    // #c3195d - czerwień/róż
    // #f70776 - jasna czerwień/róż