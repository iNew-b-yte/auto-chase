import React from 'react';

function Footer() {
    return <footer id='footer' className='p-5 bg-light'>
        <div className='row '>
            <div className='col-sm-12 col-md-6 text-md-start text-center fs-2 fw-bolder'>
            Want to Explore  more?   💪
            </div>
            <div className='col-sm-12 col-md-6 text-md-end text-center align-self-center'>
                <button
                    type='button'
                    className='btn btn-dark rounded-pill text-white mt-3 mt-md-0 px-5'
                >
                    Download Free App
                </button>
            </div>
        </div>
        <hr className='my-5'/>
        <div className='row text-center text-md-start'>
            <div className='col-sm-12 col-md-3'>
                <h1 className='fs-5 fw-bold' >
                    About Rareblocks
                </h1>
                <p className='custom-items'>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nullam dictum aliquet accumsan porta lectus
                    ridiculus in mattis. Netus sodales in volutpat
                    ullamcorper amet adipiscing fermentum.</p>
            </div>
            <div className='col-sm-12 col-md-3'>
                <h1 className='fs-5 fw-bold mt-4 mt-md-0'>Company</h1>
                <p className='custom-items'>About</p>
                <p className='custom-items'>Features</p>
                <p className='custom-items'>Work</p>
                <p className='custom-items'>Career</p>
            </div>
            <div className='col-sm-12 col-md-3 '>
                <h1 className='fs-5 fw-bold mt-4 mt-md-0'>Help</h1>
                <p className='custom-items'>Customer Support</p>
                <p className='custom-items'>Delivery Details</p>
                <p className='custom-items'>Terms & Conditions</p>
                <p className='custom-items'>Privacy Policy</p>
            </div>
            <div className='col-sm-12 col-md-3'>
                <h1 className='fs-5 fw-bold mt-4 mt-md-0'>Resources</h1>
                <p className='custom-items'>Free eBooks</p>
                <p className='custom-items'>Development Tutorial</p>
                <p className='custom-items'>How to - blog</p>
                <p className='custom-items'>Youtube Playlist</p>
            </div>
        </div>
        <hr className='my-3' />
        <div className='text-center m-0'>Copyright © {new Date().getFullYear()}. All Rights Reserved By Huntdigitalmedia.com</div>
    </footer>


}

export default Footer;