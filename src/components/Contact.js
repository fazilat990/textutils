import React from 'react'

function Contact(props) {

    return (
        <>
            <h1 style={{ color: props.textColor }}>Contact</h1>
            <form className="row g-3 needs-validation">
                <div className="col-md-4">
                    <input type="text" className="form-control" id="firstname" required placeholder='First Name' style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" id="lastname" required placeholder='Last Name' style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <input type="text" className="form-control" id="emailaddress" required placeholder='Email Address' style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" id="subject" required placeholder='Subject' style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-12">
                    <input type="text" className="form-control" id="message" required placeholder='Message' style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck" required  style={{backgroundColor: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? '#fff' : '#1a1a1a', borderColor: props.mode === 'dark' ? '#353739' : '#ccc'}} />
                        <label className="form-check-label" htmlFor="invalidCheck" style={{ color: props.textColor }}>
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" style={{backgroundColor: props.themeColor, borderColor: props.themeColor }} >Submit</button>
                </div>
            </form>
        </>
        
    )
}

export default Contact