import React from 'react'

const TopBar = () => {
    return (
        <header className="bg-black p-4 md:px-28 flex justify-between items-center text-white rounded-t-2xl">
            <h1 className="md:text-lg"><span className='font-bold'>Abstract</span> | Help Center</h1>
            <button className="btn py-2 px-4 rounded border">Submit a request</button>
        </header>
    )
}

export default TopBar