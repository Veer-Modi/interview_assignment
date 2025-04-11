import { Link } from 'react-router-dom';

function Home() {
  const productIds = [101, 102, 103];

  return (
    <div className="page">
      <h1>Product List</h1>
      <ul>
        {productIds.map((id) => (
          <li key={id}>
            <Link to={`/product/${id}`}>View Product {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
