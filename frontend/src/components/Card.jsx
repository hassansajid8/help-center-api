import React from 'react'

const Card = ({title, description}) => {
    return (
        <div className="bg-gray-300 rounded-xl shadow border border-gray-500 xl:w-[28rem] lg:w-[24rem] w-2/3 min-h-40 m-auto text-left">
            <div className='p-4 pb-1 border-b border-gray-500'>
            <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-600 p-4 pt-1">
                {description}
            </p>
        </div>
    )
}

export default Card