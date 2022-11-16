import '../App.css';
import React, { useEffect, useState } from 'react';


const List = ({getItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating Items");
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {
        items.map((item, index) => <div key={`useCallback-item-${index}`}>{ `Item: ${item}` }</div>)
      }
    </div>
  );
};

export default List;
