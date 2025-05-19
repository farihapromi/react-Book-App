import React, { useEffect } from 'react'
import { Tabs ,TabList,Tab,TabPanel} from 'react-tabs'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../utitlity/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const[readList,setReadList]=useState([])
    const [sort,setSort]=useState('')
    const allBooks=useLoaderData()


    useEffect(()=>{
      const storedReadList=getStoredReadList()
      const storedreadListInt=storedReadList.map(id=>parseInt(id))
      const readBookList= allBooks.filter(book=>storedreadListInt.includes(book.bookId))
      setReadList(readBookList)

    },[])
    
    const handleSort=sortType=>{
      setSort(sortType)
      if(sortType==='No of pages'){
        const sortedreadList=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
        setReadList(sortedreadList)
      }
      if(sortType==='Ratings'){
        const sortedReadList=[...readList].sort((a,b)=>a.rating-b.rating)
        setReadList(sortedReadList)
      }
    }


  return (
    <div>
        <h3 className="text-3xl">Listed Books</h3>

        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-600 text-white">
    {
    sort?  `Sort By:${sort}`:'Sort By'
    }
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
    <li onClick={()=>handleSort('No of pages')}><a>Number of pages</a></li>
  </ul>
</div>
    

      
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
   <TabList className="flex gap-4 border-b w-full">
  <Tab className={`px-4 py-2 rounded-t-md cursor-pointer ${tabIndex === 0 ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}>
    Read List
  </Tab>
  <Tab className={`px-4 py-2 rounded-t-md cursor-pointer ${tabIndex === 1 ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}>
    Wish List
  </Tab>
</TabList>


      <TabPanel className='text-3xl'>Books I read :{readList.length}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-8'>
          {
            readList.map(book=><Book key={book.bookId} book={book}/>)
          }
     </div>
      </TabPanel>
      <TabPanel className='text-3xl'>My WishList</TabPanel>
    </Tabs>
      </div>
      
  
  )
}

export default ListedBooks
