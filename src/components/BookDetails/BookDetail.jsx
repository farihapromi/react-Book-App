import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const BookDetail = () => {
    const {bookId}=useParams()
    const id=parseInt(bookId)
    const data=useLoaderData()
    const book=data.find(book=>book.bookId===id)
    console.log(book)
    const{bookId:curentBookId,image,bookName,category,author,review,tags}=book
  return (
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-8">
    <img
      src={image}
      className="h-[326px]" />
    <div>

        <h1 className='font-bold text-5xl'>{bookName}</h1>
        <h3>By:{author}</h3>
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
    <div className="divider"></div>
</div>

     
    <div className='flex gap-4'>
            <button className='btn btn-outline btn-accent'>Read</button>
        <button className='btn btn-accent'>WishList</button>

        </div>
    </div>
  </div>

        
      
    </div>
  )
}

export default BookDetail
