import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import '../styles/Home.scss';

interface Item {
  id: string;
  key: string;
  value: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  // Fetching items from the API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/api/items/');
        setItems(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching items:', err);
        setLoading(false);
      }
    };

    fetchItems();
  }, [api]);

  const handleEdit = async (id: string, newValue: string) => {
    try {
      await api.put(`/api/items/${id}/`, { value: newValue });
      const updatedItems = items.map(item => item.id === id ? { ...item, value: newValue } : item);
      setItems(updatedItems);
    } catch (err) {
      console.error('Error updating item:', err);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home-container">
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.key}: {item.value}</span>
            { }
            <input
              type="text"
              defaultValue={item.value}
              onBlur={(e) => handleEdit(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
