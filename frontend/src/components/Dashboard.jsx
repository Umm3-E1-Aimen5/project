import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
       <div className="container-fluid mb-5">
        <div className="row">
            <nav 
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                       
                        {/* <li className='nav-item'>
                         <Link className='nav-link active' aria-current="page" to="#">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-shopping-cart"
                            aria-hidden="true"
                            >
                                <line x1="16" y1="13" x2="8"y2="13" ></line>
                                <line x1="16" y1="17" x2="8"y2="17"></line>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                                2-1.61L23 6H6"></path>

                            </svg>
                            Products
                         </Link>
                        </li>

                        <li className='nav-item'>
                         <Link className='nav-link active' aria-current="page" to="#">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-shopping-cart"
                            aria-hidden="true"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0
                                0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line cx="9" cy="21" r="1"></line>
                                <line x="20" cy="21" r="1"></line>
                                <polyline points="10 9 9 8 9"></polyline>
                                

                            </svg>
                            Current Month
                         </Link>
                        </li>
 */}

                    </ul>

                </div>

            </nav>
        </div>
        </div> 
    </div>
  )
}

export default Dashboard
