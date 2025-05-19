const getStoredReadList = () => {
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exist
    console.log(id, 'Already exists');
  } else {
    storedList.push(id);
    const storedListstr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListstr);
  }
};
const getStoredWishList = () => {
  const storedListStr = localStorage.getItem('wish--list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    // already exists
    console.log(id, 'Already exists in wishlist');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wish-list', storedListStr);
  }
};

export { addToStoredReadList, getStoredReadList, addToStoredWishList };
