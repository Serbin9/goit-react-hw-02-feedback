import React from 'react';

const Sectiontitle = ({title, children})=>{
    return(
        <>
        <h2>{title}</h2>
        {children}
        </>
    )
}

export default Sectiontitle