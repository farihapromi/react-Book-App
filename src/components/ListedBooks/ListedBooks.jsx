import React, { useEffect } from 'react'
import { Tabs ,TabList,Tab,TabPanel} from 'react-tabs'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../utitlity/addToDb';

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
     <TabList className="flex gap-4 border-b-2 w-full">

        <Tab>Read List</Tab>
       <Tab>Wish List</Tab>
      </TabList>
      <TabPanel className='text-3xl'>Books I read</TabPanel>
      <TabPanel className='text-3xl'>My WishList</TabPanel>
    </Tabs>
      </div>
      
  
  )
}

export default ListedBooks
