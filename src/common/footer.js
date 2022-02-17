import React, { Component } from 'react';
import { BsTwitter, BsWhatsapp, BsYoutube, BsLinkedin, BsFacebook, BsInstagram, BsTelegram, BsDiscord } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si'
import SocialTab from "./../component/SocialTab";
import Disclosur from "./../component/Disclosure";
import { questions } from './../Q&a'
import Logo from './../../src/img/logo.png'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className=" bg-base-300">
                <div className="max-w-7xl mx-auto px-4 pb-5 md:px-0">
                    <h1 className="text-green-100 text-3xl font-light text-center md:py-20 py-5">Frequently Asked Questions</h1>
                    {questions.map((dis, i) => (
                        <Disclosur
                            question={dis.question}
                            ans={dis.ans}
                        />
                    ))}


                    <div className="max-w-7xl mx-auto md:px-0 md:w-3/4 w-full md:flex-row flex-col flex items-center md:py-10 py:2 justify-between" >
                        <h1 className="text-white font-light md:text-base text-sm">Have a question or would like to submit an update?</h1>
                        <button className="border hover:bg-white hover:text-green-500 border-green-500  w-56  md:py-3 py:2 px-10 rounded-full font-bold text-white">Forums</button>
                    </div>
                </div>
                <div className="md:grid hidden grid-cols-4  max-w-7xl mx-auto px-2 md:px-0 ">
                    <div className="items-center flex flex-center flex-row pl-36">
                        {/* <h1 className="text-white uppercase text-3xl">Kakitu</h1> */}
                        <img src={Logo} height="200px" width="200px" alt="" />

                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Get Started</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Get Kakitu</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Accept Kakitu</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Build on Kakitu</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Learn More</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Resources</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Developer Tools</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Blog</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Kakitu Foundation</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Connect</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Forum</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Team</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8  no-underline" ><Link to="/contact_us" className="hover:text-current hover:no-underline">Contact Us</Link></h1>

                    </div>
                </div>
                <div className="grid md:hidden  grid-rows-4 max-w-7xl mx-auto px-1 ">
                    <div className="items-center flex flex-center flex-row pl-32">
                        <img src={Logo} height="100px" width="100px" alt="" />
                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Get Started</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Get Kakitu</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Accept Kakitu</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Build on Kakitu</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Learn More</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Resources</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Developer Tools</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Blog</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Kakitu Foundation</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl px-20  font-light text-white">Connect</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Forum</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8">Team</h1>
                        <h1 className="px-20 text-gray-700 hover:text-black font-light leading-8"><Link to="/contact_us" className="hover:text-current hover:no-underline">Contact Us</Link></h1>

                    </div>
                </div>
                <div className=" md:hidden flex justify-evenly items-center w-1/2 mx-auto pb-10">
                    <div className="flex flex-row justify-evenly items-center ">
                        <div className="flex flex-col justify-evenly items-center px-3">
                            <SocialTab Name={SiGitlab} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsTwitter} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsWhatsapp} hcolor={`text-white`} h={2} w={2} />
                        </div>
                        <div className="flex flex-col justify-evenly items-center px-3">
                            <SocialTab Name={BsYoutube} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsLinkedin} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsFacebook} hcolor={`text-white`} h={2} w={2} />
                        </div>
                        <div className="flex flex-col justify-evenly items-center px-3">
                            <SocialTab Name={BsInstagram} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsTelegram} hcolor={`text-white`} h={2} w={2} />
                            <SocialTab Name={BsDiscord} hcolor={`text-white`} h={2} w={2} />
                        </div>

                    </div>
                </div>
                <div className="max-w-7xl mx-auto md:px-0 md:grid hidden grid-cols-2 border-gray-400 border-t-2 border-b-2 py-2">
                    <p className="ml-3 text-white font-light">© 2021 KAKITU SECURITIES LIMITED. Terms of Use. Privacy Policy.</p>

                    <div className="flex-row flex justify-evenly items-center ">
                        <SocialTab Name={SiGitlab} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsTwitter} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsWhatsapp} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsYoutube} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsLinkedin} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsFacebook} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsInstagram} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsTelegram} hcolor={`text-white`} h={2} w={2} />
                        <SocialTab Name={BsDiscord} hcolor={`text-white`} h={2} w={2} />

                    </div>

                </div>
                {/* <p className="text-center text-gray-400 py-2 font-light text-sm">The Kakitu Foundation is not responsible for the content of external sites and services.
      <a href="/" className="font-medium text-gray-400 hover:text-white">Learn more</a></p> */}
            </div>

        );
    }
}

export default Footer;