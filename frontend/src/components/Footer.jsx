import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer text-white ">
            <div className="container">
                <footer className="py-5">
                 <div className="row text-center mt-10">
                    <div className="col-3">
                        <h4>FINE ART</h4>
                    </div>
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Pricing</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">FAQs</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">About</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Features</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">Pricing</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">FAQs</a>
                            </li>
                            <li className="nav-item mb-2">
                            <a to="#" className="nav-link p-0 text-white">About</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-5">
                        <h5>Subscribe to Our newsletters</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        {/* <div className="col-6">  */}
                        <input type="email" className="form-control px-8 py-2  ms-25" id="exampleFormControlInput1" placeholder="Email address" />
                        {/* </div>  */}
                        <br></br>
                        <button className="btn btn-outline-info text-white rounded-pill px-4 py-2 ms-2">Subscribe</button>
                        
                        
                    </div>
                 </div>
                 <hr/>
                 <br></br>
                 <p>© 2021 Company,Inc. All rights reserved.</p>
                </footer>
            </div>
            

        </footer>
        
    </div>
  )
}

export default Footer