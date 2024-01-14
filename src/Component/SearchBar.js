import React from 'react'

export default function SearchBar() {
    return (
        <>
            <div className="container">
                <div key="search" className="column">
                    <input type="text" name="search" className='position-absolute' placeholder='Search for anything' style={{
                        border: "none",
                        outline: "none",
                    }}/>
                </div>
            </div>
        </>
    )
}
