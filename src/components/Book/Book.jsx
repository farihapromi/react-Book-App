import React from 'react'

const Book = ({book}) => {
    const{author,bookName,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
  return (
   <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-lg">
  <figure className='bg-gray-200 py-8 rounded-2xl'>
    <img
      src={image}
      className='h-[166px]'
      alt="books" />
  </figure>
  <div className="card-body">
    <div className="flex gap-2 justify-center">

   
   {
    tags.map((tag,idx)=><button key={idx} className="btn  text-green-500 font-bold">{tag}</button>)
   }
    </div>
    <h2 className="card-title">
    {bookName}
      
    </h2>
    <p> By: {author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-between">
      <div className="">{category}</div>
   <div className="flex items-center gap-2">
  <span>{rating}</span>
  <div className="rating">
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  </div>
</div>
    </div>
  </div>
</div>
  )
}

export default Book
