import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome Home</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
