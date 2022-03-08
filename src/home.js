
import Nav from "./Layouts/Nav";
import Eco from './img/icon-eco-friendly.svg';
import Les from './img/icon-fee-less.svg';
import Instant from './img/icon-instant.svg';
import { BsTwitter, BsWhatsapp, BsYoutube, BsLinkedin, BsFacebook, BsInstagram, BsTelegram, BsDiscord } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si';
import { FaAppStoreIos } from 'react-icons/fa';
import SocialTab from "./component/SocialTab";
import { Link } from 'react-router-dom';
import Footer from "./common/footer";
import Playstore from './img/playstore.png';

import Video from './v.mp4'
import { useEffect, useState } from "react";
function Values(props) {

    return (

        <div className=" flex flex-col justify-center items-center py-10 ">
            {/* className="border-2 border-base-400 content-center flex justify-items-center items-center rounded-full  */}
            <div >
                <img src={props.Img} alt="" />
            </div>
            <h1 className="text-2xl font-light text-gray-900">{props.Title}</h1>
            <p className="text-gray-400 capitalize text-center pt-3">{props.body}</p>
        </div>
    );
}




function Home() {

    const [authenting, changeAuth] = useState(false)

    useEffect(() => {

        changeAuth(true)

    })
    return (
        <div className="font-Open">
            <div className="relative flex flex-col  bg-base-500 bg-hero-pattern bg-no-repeat ">
                <div className="w-full">
                    <div className="max-w-7xl mx-auto px-4 md:px-0">
                        <Nav />

                        <div className="flex  pb-20">
                            {/* <h1 className="text-white md:text-6xl text-center md:text-justify text-3xl font-light">Digital money for the modern world</h1> */}
                            <div className="flex flex-row w-full  mx-auto  ">

                                <div className="w-1/3 md:flex hidden justify-center items-center flex-col">
                                    <h2 className="text-white text-2xl font-Montserrat ">Mpesa based Crypto Currency</h2>
                                    <p className=" italic"> Kakitu Securities Ltd</p>
                                    {/* <p>Ladies and gentlemen </p> */}

                                </div>

                                <div className="md:w-2/3 w-full">
                                    <div className="video-responsive ">
                                        {authenting ? <video autoPlay={true} muted loop className="w-full" height="240" >
                                            <source src={Video} type="video/mp4" />
                                        </video> : null}
                                    </div>
                                </div>

                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="absolute z-50 hidden md:inline-flex -bottom-14 w-full " >
                    <div className=" w-3/4  mx-auto flex justify-evenly items-center shadow-lg rounded-md bg-white py-4  flex-row  ">
                        <SocialTab Name={SiGitlab} hcolor={`text-black`} />
                        <SocialTab Name={BsTwitter} hcolor={`text-green-400`} />
                        <SocialTab Name={BsWhatsapp} hcolor={`text-green-600`} />
                        <SocialTab Name={BsYoutube} hcolor={`text-red-600`} />
                        <SocialTab Name={BsLinkedin} hcolor={`text-red-4000`} />
                        <SocialTab Name={BsFacebook} hcolor={`text-red-4000`} />
                        <SocialTab Name={BsInstagram} hcolor={`text-red-4000`} />
                        <SocialTab Name={BsTelegram} hcolor={`text-red-4000`} />
                        <SocialTab Name={BsDiscord} hcolor={`text-red-4000`} />
                    </div>
                </div>

                <div className="absolute z-50 md:hidden inline-flex -bottom-14 w-full  " >
                    <div className=" w-3/4  mx-auto flex justify-evenly items-center shadow-lg rounded-md bg-white py-4  flex-row  ">
                        <SocialTab Name={SiGitlab} hcolor={`text-white`} h={1} w={2} />
                        <SocialTab Name={BsTwitter} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsWhatsapp} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsYoutube} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsLinkedin} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsFacebook} hcolor={`text-white`} h={2} w={2} />
                        {/* <SocialTab Name={BsInstagram} hcolor={`text-white`} h={2} w={2} />
            <SocialTab Name={BsTelegram} hcolor={`text-white`} h={2} w={2} />
            <SocialTab Name={BsDiscord} hcolor={`text-white`} h={2} w={2} /> */}
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="md:py-21 py-7 md:px-10 px-2 flex justify-items-center align-middle pt-32">
                    <h4 className="text-center flex-1 md:text-4xl text-2xl font-light leading-10">
                        Kakitu makes money efficient for a more equal world - simple to pay with, easy to accept and open to all
                    </h4>
                </div>
                <div className="md:grid hidden grid-cols-3  gap-x-5">
                    <Values Title="Fee-less" Img={`${Les}`} body="Kakitu is fee-less, making it practical and inclusive for everyone in the world." />
                    <Values Title="Eco-friendly" Img={`${Eco}`} body="Without relying on mining, printing or minting, Kakitu is sustainable digital money." />
                    <Values Title="Instant" Img={`${Instant}`} body="Digital money should be quick and easy-to-use, Kakitu is ready when you are." />
                </div>
                <div className="grid md:hidden grid-rows-3 gap-y-4">
                    <Values Title="Fee-less" Img={`${Les}`} body="Kakitu is fee-less, making it practical and inclusive for everyone in the world." />
                    <Values Title="Eco-friendly" Img={`${Eco}`} body="Without relying on mining, printing or minting, Kakitu is sustainable digital money." />
                    <Values Title="Instant" Img={`${Instant}`} body="Digital money should be quick and easy-to-use, Kakitu is ready when you are." />
                </div>
            </div>

            <div className="flex md:flex-row flex-col flex-1 bg-base-50">
                <div className="flex flex-1 flex-col justify-center items-center md:py-20 py:10 gap-y-6 border-white md:border-0 border-b-2 border-l-0 border-t-0  border-r-0 pb-5">
                    <h1 className="text-base-400 text-3xl font-light">Documentation</h1>
                    <p className="text-center md:px-40 px-4 text-gray-600">A technical overview of Kakitu and the original design for modern digital money.</p>
                    <div className="flex md:flex-row flex-col justify-center items-center md:gap-x-10 gap-y-5">
                        <button className="bg-base-500 shadow-lg md:w-40 w-48 text-white md:py-3 py-2 px-10 hover:text-black hover:bg-base-100 rounded-full"><a href="https://api.kakitu.app/swagger-ui/index.html" className="hover:text-black hover:no-underline">Integration</a></button>
                        <button className="bg-base-500 shadow-lg md:w-40 w-48 text-white hover:text-black md:py-3 px-10 py-2 hover:bg-base-100 rounded-full"><Link className="hover:no-underline hover:text-black" to="/whiteboard">whitepaper</Link></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
