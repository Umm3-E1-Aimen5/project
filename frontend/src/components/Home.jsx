import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
              <p className="lead text-center fs-4 mb-5 text-white">There are five purposes for visual art: Ceremonial,
                Artistic Expression, Narrative, Functional and Persuasive. -Ceremonial art is made to celebrate or
                commemorate something important in the culture, in ritual or worship, or in personal life.</p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
                <button className="btn btn-outline-light  rounded-pill px-4 py-2">Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service">
           <div className="container my-5 py-5">
            <div className="row">
               <div className="col-12">
                <h3 className="fs-5 text-center mb-2">Our Services</h3>
                 <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
                 <hr className="w-25  mx-auto" />
                </div> 
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div class="card p-3"  style={{height:"50vh"}}>
                <img src='./assets/pic1.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>  */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Highly Customizable</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk.</p>
    
  </div>
</div>
                </div>

                <div className="col-md-4">
                <div class="card p-3" style={{height:"49vh" }} >
                <img src='./assets/pic2.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-mobile fa-4x mb-4 text-primary"></i> */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Fully Responsive Layout</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk .</p>
    
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card p-3"  style={{height:"49vh" }}>
                <img src='./assets/pic7.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-users fa-4x mb-4 text-primary"></i>  */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Users Experience</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk.</p>
    
  </div>
</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div class="card p-3" style={{height:"49vh" }}>
                <img src='./assets/pic4.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>  */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Creative Web Design</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk.</p>
    
  </div>
</div>
                </div>

                <div className="col-md-4">
                <div class="card p-3" style={{height:"49vh" }}>
                <img src='./assets/pic8.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>  */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Unique and Clean</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk.</p>
    
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card p-3" style={{height:"49vh" }}>
                <img src='./assets/pic6.jpeg' style={{height:"30vh" }} class="card-img-top mt-0" alt="..."/>
  <div class="card-body text-center">
    {/* <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>  */}
    <h5 class="card-title mb-0 fs-4 fw-bold">Creative Ideas</h5>
    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk.</p>
    
  </div>
</div>
                </div>
            </div>
            
            </div> 
        </section>
        <div class="about mt-0">  
        <section id="about">
          <div className="container my-3 py-4">
            <div className="row">
                <div className="col-md-6">
                  <img src="/assets/about1.png" alt="About" 
                  className='w-75 mt-2'/>  
                </div>
                <div className="col-md-6">
                    <h3 className="fs-5 mb-3 mt-4 text-center">About Us</h3>
                    <h1 className="display-6 mb-3 text-center">Who <b>We</b> Are</h1>
                    <hr className="w-50 mx-auto"/>
                    <p className="lead mb-4">The fine arts develop valued higher order and creative thinking skills such as memory,
                     various forms of communication, and the ability to compare and contrast, group and label,
                     explain cause and effect, assess significance, make predictions, and frame and test hypotheses.</p>
                     <p className="lead mb-4">The fine arts develop valued higher order and creative thinking skills such as memory,
                     various forms of communication, and the ability to compare and contrast, group and label,
                     explain cause and effect, assess significance, make predictions, and frame and test hypotheses.</p>
                    
                      <button className="btn btn-primary rounded-pill px-4 py-2 ">Get Started</button>
                      <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
            </div>  
        </section>
        </div>  
        <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">Have Some <b>Question?</b> </h1>
                            <hr className="w-25  mx-auto" />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/about1.jpeg" alt="Contact"
                                    className='w-75 mt-2' />
                            </div>
                            <div className="col-md-6">
                                <form action="">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                     </div>
                                    <button type='Submit'className="btn btn-outline-primary rounded-pill">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      
    </div>
  )
}

export default Home