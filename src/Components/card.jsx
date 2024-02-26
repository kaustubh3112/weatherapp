import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white/70 rounded-xl p-8 w-full max-w-[380px] h-full max-h-[480px] shadow-2xl'>
            <div className='card-body'>{props.children}</div>
        </div>
    )
}

export default Card