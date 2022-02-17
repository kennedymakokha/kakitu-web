import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Disclosur(props) {
    // alert(JSON.stringify(props.ans))
    return (


        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between max-w-7xl mx-auto md:w-3/4 w-full md:px-0 py-2 md:text-xl text-sm font-light text-left text-gray-700 hover:text-white  border-b-2 border-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{props.question}</span>
                        <ChevronUpIcon
                            className={`${open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-purple-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className=" pt-4 pb-2 max-w-7xl mx-auto md:w-3/4 w-full   text-white">
                        <h1 className="font-light text-gray-700 md:text-xl text-sm">{props.ans !== undefined && props.ans.h1}</h1>
                        <p>{props.ans !== undefined && props.ans.p1}</p>
                        <h1 className="font-light text-gray-700 md:text-xl text-sm">{props.ans !== undefined && props.ans.h2}</h1>
                        <p>{props.ans !== undefined && props.ans.p2}</p>
                        <h1 className="font-light text-gray-700 md:text-xl text-sm">{props.ans !== undefined && props.ans.h3}</h1>
                        <p>{props.ans !== undefined && props.ans.p3}</p>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>


    )
}
