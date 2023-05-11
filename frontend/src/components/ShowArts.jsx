import React, { useEffect, useState } from 'react'

const ShowArts = () => {

  const [uData, setUData] = useState([]);

    const userData = async () => {
        let res = await fetch("http://localhost:8000/art")
        res = await res.json();
        setUData(res)
    }
    useEffect(() => {
      userData()
  }, [])
  return (
    <div>
       <h1 className='display-0 fw-bold my-4 text-primary text-center'>All Arts</h1>
            <hr />
            <div className='d-flex justify-content-around text-center'>
            {
                    uData.map((art) => {
                        return (
                            <>
                                <div class="card" style={{width: "18rem"}}>
                                    <img class="card-img-top" src={`http://localhost:8000/uploads/${art.image}`} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{art.title}</h5>
                                        <p class="card-text">{art.description}</p>
                                        <p class="card-text">{art.artType}</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default ShowArts