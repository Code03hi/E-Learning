import React from 'react'

export default function NavBar() {
    return (
        <div className='d-flex bg-body-tertiary align-items-center' style={{
            padding: "10px",
            height: "70px",
        }}>
            <h2 className=''>Edu-Pluse</h2>
            <a className="navbar-brand mx-4 text" href='/' style={{
                cursor: "pointer",
            }} >Categories</a>
            <div className="" style={{
                width: "550px "
            }} >
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="topMenu mx-4">
                <a className="navbar-brand mx-2 text" href='/' style={{
                    cursor: "pointer",
                }} >Home</a>
                <a className="navbar-brand mx-2 text" href='/' style={{
                    cursor: "pointer",
                }} >About</a>
                <a className="navbar-brand mx-2 text" href='/' style={{
                    cursor: "pointer",
                }} >Course</a>
                <a className="navbar-brand mx-2 text" href='/' style={{
                    cursor: "pointer",
                }} >My-Learning</a>
            </div>
            <div className="cartLikeNoteLogin mx-4">
            <i class="bi bi-cart"></i>
            </div>
        </div>
    )
}
