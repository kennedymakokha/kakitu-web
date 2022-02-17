import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import PDf from './img/Whitepaper.pdf'
import Nav from './Layouts/Nav';


function Whiteboard() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    function previousPage() {
        if (pageNumber > 1) {
            let newPage = pageNumber - 1
            setPageNumber(newPage);
        }

    }

    function nextPage() {
        if (pageNumber < numPages) {
            let newPage = pageNumber + 1
            setPageNumber(newPage);
        }
    }
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function resize() {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
        // this.setState({ hideNav: window.innerWidth <= 760 });
    }
//./?
    useEffect(() => {
        // Update the document title using the browser API
        window.addEventListener("resize", resize());
        resize();
    });
    return (
        <div className="font-Open bg-base-50">
            <div className="relative flex flex-col  bg-base-500 bg-hero-pattern bg-no-repeat ">
                <div className="w-full">
                    <div className="max-w-7xl mx-auto px-4 md:px-0">
                        <Nav />

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 md:px-0 pt-14">
                <div className="md:py-23 py-7 md:px-10 px-2 flex justify-items-center align-middle  ">
                    <div className="flex flex-col w-full" >
                        <div className=" mt-10">
                            <Document
                                file={PDf}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber}
                                    // canvasBackground=""
                                    // width="1"
                                    scale={dimensions.width < 766 ? 0.5 : 2}
                                    className="max-w-7xl flex items-center flex-row justify-center "
                                />

                            </Document>
                            <div className="flex flex-row justify-center items-center md:gap-x-10 gap-x-5  mx-4 my-10 " >
                                <button className="bg-base-500 shadow-lg  md:text-sm text-xs md:w-40 w-48 text-white md:py-3 py-2 px-0 md:px-10 rounded-full" onClick={previousPage} >Prev</button>
                                <button className="md:w-16 w-50 md:text-sm text-xs text-base-400 md:py-3 py-2 px-0 md:px-10 rounded-full">Page {pageNumber} of {numPages}</button>
                                <button className="bg-base-500 shadow-lg md:text-sm text-xs md:w-40 w-48 text-white md:py-3 px-0 md:px-10 py-2 rounded-full" onClick={nextPage}>Next</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
}
export default Whiteboard