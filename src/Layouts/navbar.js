import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
           
                <div className="">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <svg className="w-6 h-6 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    <span className="font-bold font-Open">Nano</span>
                                </a>
                            </div>
                            {/* primary menu */}
                            <div className="hidden md:flex space-x-1 items-center">
                                <a href="#" className="flex items-center py-5 px-3 text-white hover:text-gray-900">
                                    <span className="font-Open">Get Started</span>
                                </a>
                                <a href="#" className="flex items-center py-5 px-3 text-white hover:text-gray-900">
                                    <span  className="font-Open flex items-center ">Learn More <svg class="w-4 h-4 text-gray-500 text-6xl leading-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span>
                                </a>
                                <a href="#" className="flex items-center py-5 px-3 text-white hover:text-gray-900">
                                    <span  className="font-Open">Connect</span>
                                </a>
                            </div>
                            {/* secondary menu */}
                        </div>
                        
                    </div>
                    {/* mobile menu  */}
                </div>
           

        );
    }
}

export default Navbar;