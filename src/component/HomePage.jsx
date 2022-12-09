import React from 'react';

// import components
import LoginSignUp from './LoginSignUp';




function HomePage() {
    return (
        <section id="homePage">
            <ul
                className='d-flex justify-content-md-end
                 justify-content-center 
                flex-column
                flex-md-row
                text-center 
                
                 custom-list 
                   p-0 pt-3 mx-5'
            >
                <li className='align-self-center custom-list-items'>New Cars</li>
                <li className='align-self-center custom-list-items'>Used Cars</li>
                <li className='align-self-center custom-list-items'>Community Groups</li>
                <li className='align-self-center custom-list-items'>About</li>
                <li className='align-self-center custom-list-items'>Login</li>
                <button type='button' className='btn custom-list-items custom-btn-1 ms-3 c'>Create free account</button>
            </ul>
            <h1 className='mx-5'>/Auto Chase</h1>
            <div className='row p-0 m-0'>
                <div className="col-lg-8 px-5 pt-3">

                </div>
                <div className="col-lg-4 p-3"><LoginSignUp /></div>
            </div>

        </section>
    )
}

export default HomePage;