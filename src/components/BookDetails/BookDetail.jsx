import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)
    const data=useLoaderData()
    const book=data.find(book=>book.bookId===id)
    console.log(book)

    const{bookId:curentBookId,image,bookName,category,author,review,totalPages,rating,tags,publisher,yearOfPublishing,}=book

    const handleMarkAsRead=()=>{
        /**
         * 1.understand what to store and save =>bookId
         * 2.Where to store:databse
         * 3.array,list,collection
         * 4.Check if the book already in readList
         * 5.If not then add the book to bookList
         * 
         * 
         */

    }


  return (
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-8">
    <img src={image} className="h-[326px]" />
    
    <div className="flex flex-col items-start text-left"> 
      <h1 className='font-bold text-5xl'>{bookName}</h1>
      <h3 className='tetx-3xl font-semibold'>By: {author}</h3>
      <div className="divider"></div>
      <h3>{category}</h3>
      <p className="text-xl"><span className='font-bold'>Review: </span>{review}</p>

      <div className="flex items-center gap-2 justify-start m-4">
        <p className="font-bold">Tag:</p>
        {tags.map((tag, idx) => (
          <button key={idx} className="btn text-green-500 font-bold">
            {tag}
          </button>
        ))}
      </div>

      <div className="divider"></div>

      <div>
        <p>Number of Pages:  <span className='font-bold'>{totalPages}</span></p>
        <p>Publisher:  <span className="font-bold">{publisher}</span> </p>
        <p>Year of Publishing:  <span className="font-bold">{yearOfPublishing}</span></p>
        <p>Rating: <span className="font-bold">{rating}</span> </p>
      </div>

      <div className="divider"></div>

      <div className='flex gap-4'>
        <button 
        className='btn btn-outline btn-accent'
        onClick={handleMarkAsRead}
        >Read</button>
        <button className='btn btn-accent'>WishList</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default BookDetail
