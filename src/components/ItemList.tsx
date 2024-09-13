
import React from 'react';
import '..styles/ItemList.scss';

// Define the type item
interface Item {
  id: string;
  key: string;
  value: string;
}

// Define the props 
interface ItemListProps {
  items: Item[];
  onEdit: (id: string, newValue: string) => void;
}

// ItemList component
const ItemList = ({ items, onEdit }: ItemListProps) => {
  return (
    <div className="item-list">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.key}: {item.value}</span>
            <input
              type="text"
              defaultValue={item.value}
              onBlur={(e) => onEdit(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
