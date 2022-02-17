
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Logo from './../img/logo.png'
import { Link } from 'react-router-dom'

import { Foundation, Start } from './menuItems/Language';
function Nav(props) {
    return (
        <div className="flex font-Open flex-row justify-start gap-x-5 items-center py-10">
            <div className="md:items-start items-center flex flex-row">
                <Link to="/">
                    <img src={Logo} alt="" height={100} width={100} />
                </Link>
            </div>
            <div className="flex flex-1">
                <ul className="">
                    <li className="inline-block ">
                        <Menu as="div" className=" hidden md:inline-block relative  text-left">
                            <div>

                                <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Get Started

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 py-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-black divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Start name="Get Kakitu" />
                                    <Start name="Accept Kakitu" />
                                    <Start name="Build Kakitu" />
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li className="inline-block ">
                        <Menu as="div" className=" hidden md:inline-block relative  text-left">
                            <div>

                                <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Learn More

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 py-1 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-black divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Start name="Resourse" />
                                    <Start name="Developer Tools" />
                                    <Foundation name="Blog" />
                                    <Start name="Kakitu Securities ltd" />
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    <li className="inline-block ">
                        <Menu as="div" className=" hidden md:inline-block relative  text-left">
                            <div>

                                <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Connect

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 py-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-black divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Foundation name="Forum" />
                                    <Start name="Team" />
                                    <Start name="Contact Us" url="/contact_us" />

                                </Menu.Items>
                            </Transition>
                        </Menu>


                    </li>

                </ul>
            </div>
            <Menu as="div" className=" md:hidden inline-block relative  text-left">
                <div>

                    <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Start name="Get Started" />
                        <Start name="Learn More" />
                        <Start name="Connect" />

                    </Menu.Items>
                </Transition>
            </Menu>

            {/* */}
            {/* </div>  */}
        </div>

    );
}

export default Nav;



