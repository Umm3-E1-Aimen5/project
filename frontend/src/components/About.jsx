import React from 'react'

const About = () => {
  return (
    <div>
       <div class="about mt-0">
        <section id="about">
          <div className="container my-3 py-4">
            <div className="row">
                <div className="col-md-6">
                  <img src="/assets/about1.png" alt="About" 
                  className='w-75 mt-2'/>  
                </div>
                <div className="col-md-6 text-black">
                    <h3 className="fs-5 mb-3 mt-4  text-center">About Us</h3>
                    <h1 className="display-6 mb-3 text-center">Who <b>We</b> Are</h1>
                    <hr className="w-50 mx-auto"/>
                    <p className="lead mb-4 ">The fine arts develop valued higher order and creative thinking skills such as memory,
                     various forms of communication, and the ability to compare and contrast, group and label,
                     explain cause and effect, assess significance, make predictions, and frame and test hypotheses.</p>
                     <p className="lead mb-4">The fine arts develop valued higher order and creative thinking skills such as memory,
                     various forms of communication, and the ability to compare and contrast, group and label,
                     explain cause and effect, assess significance, make predictions, and frame and test hypotheses.</p>
                    
                      <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                      <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                </div>
            </div>
            </div>  
        </section>
        </div>
    </div>
  )
}

export default About