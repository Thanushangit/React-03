import React, { useEffect, useState } from 'react'

const SingleCard = () => {

  const [data, Setdata] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then(res => res.json())
      .then(data => {
        // Sorting the data array based on price (ascending order)
        const sortedData = data.sort((x, y) => y.price - x.price);
        Setdata(sortedData);
      })
      .catch(err => console.log(err));
  }, [data]);
  
 
  return (
    <div className='singlecard'>
      {
        data.length <= 0
          ? <div>Loading...</div>
          : data.map((item, index) => (
            <div className="card" key={index}>
              <img className="card-img-top" src={item.img} alt={item.title} />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <span>{item.category}</span>
                <span>{item.brand}</span>
                <h5 className="card-title">RS: {item.price}/=</h5>
                <ul className='sizes'>
                  {item.size.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default SingleCard
