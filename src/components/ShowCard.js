import { Link } from 'react-router-dom';

function ShowCard({ show }) {
  return (
    <Link to={`/show/${show.id}`} className="card">
      <div className="image-container">
        <img
          src={show.image?.medium || 'https://via.placeholder.com/210x295'}
          alt={show.name}
          loading="lazy"
        />

        <div className="overlay">
          <span>View Details</span>
        </div>
      </div>

      <h3>{show.name}</h3>
      <p>⭐ {show.rating?.average || 'N/A'}</p>
    </Link>
  );
}

export default ShowCard;