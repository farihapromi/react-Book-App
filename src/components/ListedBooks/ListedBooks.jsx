import React, { useEffect } from 'react'
import { Tabs ,TabList,Tab,TabPanel} from 'react-tabs'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../utitlity/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const[readList,setReadList]=useState([])
    const allBooks=useLoaderData()


    useEffect(()=>{
      const storedReadList=getStoredReadList()
      const storedreadListInt=storedReadList.map(id=>parseInt(id))
      const readBookList= allBooks.filter(book=>storedreadListInt.includes(book.bookId))
      setReadList(readBookList)

    },[])


  return (
    <div>
        <h3 className="text-3xl">Listed Books</h3>
    

      
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
       <div className='flex gap-8 flex-cols-1 md:flex-cols-2 lg:flex-cols-3 p-6 mt-8'>
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
