import React from 'react';

function SocialTab(props) {
    return (

        <a href="/" className={`hover:${props.hcolor} ${props.color ? props.color : 'text-gray-700'} text-4xl`}>
            <props.Name className={`h:${props.h} w:${props.h}`} />

        </a>


    );
}

export default SocialTab;