import React from 'react'

const SingleBeer = ({beer,}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mr-1">
      <figure>
        <img src={beer.image_url} alt="Shoes"  className='h-[300px]'/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{beer.name}</h2>
        {/* {console.log(beer.description.length)} */}
        <p>{beer.description.length > 100 ? beer.description.slice(0,100) : beer.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer
