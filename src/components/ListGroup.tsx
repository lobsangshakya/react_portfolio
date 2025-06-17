
// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void 
} 

function ListGroup({ items, heading, onSelectItem}: Props) {
  // Basically, -1 is the page reloadation when none of the item is selected
  const [selectedItem, setSelectedItem] = useState(-1)
  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= {selectedItem === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { 
              setSelectedItem(index) 
              onSelectItem(item)
             }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
