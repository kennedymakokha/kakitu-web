
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Logo from './../img/logo.png'
import { Link } from 'react-router-dom'

import { Foundation, Start } from './menuItems/Language';
function Nav(props) {
    return (
      <div className="flex font-Open flex-row justify-start  items-center py-0 bg-base-300">
        <div className="md:items-start items-center flex flex-row">
          <Link to="/">
            <img src={Logo} alt="" height={100} width={100} />
          </Link>
        </div>

        <input
          type="text"
          placeholder="search"
          className="placeholder-gray-300"
          style={{
            height: 40,
            width: "45%",
            padding: 20,
            borderRadius: 5,
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        />
        <div className="flex flex-1">
          <ul className="">
            <li className="inline-block ">
              <Menu
                as="div"
                className=" hidden md:inline-block relative  text-left"
              >
                <div>
                  <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Start Mining
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1 py-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
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
              <Menu
                as="div"
                className=" hidden md:inline-block relative  text-left"
              >
                <div>
                  <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Start Trading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 py-1 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
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
              <Menu
                as="div"
                className=" hidden md:inline-block relative  text-left"
              >
                <div>
                  <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Downloads
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1 py-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
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
                    <Foundation
                      icon={
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      }
                      name="Android wallet"
                      url="https://play.google.com/store/apps/details?id=com.kakitu.wallet"
                    />
                    <Foundation
                      icon={
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      }
                      name="Windows mining"
                      url="https://download1480.mediafire.com/5jjbh2uxfzhg/ljndgfwopazc1ud/Kakitu+Miner.zip"
                    />
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="inline-block ">
              <Menu
                as="div"
                className=" hidden md:inline-block relative  text-left"
              >
                <Link to="/contact-us">
                  <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Contact Us
                  </Menu.Button>
                </Link>
              </Menu>
            </li>
          </ul>
        </div>

        <Menu as="div" className=" md:hidden inline-block relative  text-left">
          <div>
            <Menu.Button className="inline-flex justify-between w-full px-4 py-2 font-medium text-white  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
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



