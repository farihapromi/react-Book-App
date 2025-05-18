import React from 'react'
import BannerImage from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <img
      src={BannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-green-600 text-white m-8 p-6 font-bold rounded-lg ">View the list</button>
    </div>
  </div>
</div>
  )
}

export default Banner
