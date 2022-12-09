import React from 'react'

function LoginSignUp() {
    return (
        <div className='d-lg-grid gap-3 p-3 form-container rounded d-none'>
            <div className="form-floating">
                <input type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="First & Last Name" />
                <label for="floatingInput">First & Last Name</label>
            </div>
            <div className="form-floating">
                <input type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email Address" />
                <label for="floatingEmail">Email Address</label>
            </div>
            <div className="form-floating">
                <input type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Create Password" />
                <label for="floatingPassword">Create Password</label>
            </div>
            <div className='d-flex flex-row justify-content-evenly'>
                <label htmlFor="checkBox" className='custom-items'>
                I agree with the <span className='text-primary'>Terms & Conditions</span> of Clarity
                </label>
                <input type="checkbox" name="checkBox-input" id="checkBox" />
            </div>

            <button type='button' className='btn btn-dark fw-bold text-white'>Sign Up</button>
            <button type='button' className='btn btn-dark fw-bold text-white'>Sign Up with Google</button>
            <p className='text-white fw-bold text-center'>Don't have an account? <span className='text-dark fw-bold'>Sign up</span></p>
        </div>
    )
}

export default LoginSignUp;