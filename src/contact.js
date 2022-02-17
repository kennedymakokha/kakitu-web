import React, { Component } from 'react';
import Nav from './Layouts/Nav';
import Footer from './common/footer';

class Contact extends Component {
    render() {
        return (
            <div className="font-Open">
                <div className="relative flex flex-col  bg-base-500  bg-no-repeat ">
                    <div className="w-full">
                        <div className="max-w-7xl mx-auto px-4 md:px-0">
                            <Nav />
                        </div>

                    </div>

                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-0 py-14">
                    <div className="md:py-21 py-7 md:px-10 px-2 flex justify-items-center align-middle  ">
                        <div className="flex flex-col w-full" >
                            <input placeholder="email" className="border-2 border-black-50 px-2 py-2 w-full my-4" />
                            <textarea id="w3review" name="w3review" rows="4" cols="50" className="border-2 border-black-50 px-2 py-2 w-full">
                            </textarea>
                            <button className="bg-base-500 shadow-lg md:w-40 mt-4 w-48 text-white md:py-3 px-10 py-2 rounded-full"><a href="/">Submit</a></button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Contact;