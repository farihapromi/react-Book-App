const getStoredReadList = () => {};
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exist
  } else {
    storedList.push(id);
  }
};
