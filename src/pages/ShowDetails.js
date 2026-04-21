import { useParams } from 'react-router-dom';
import { useGetShowByIdQuery } from '../services/tvApi';

function ShowDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetShowByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <img src={data.image?.original} alt={data.name} />

      <div className="details-content">
        <h1>{data.name}</h1>
        <p className="rating">⭐ {data.rating?.average || 'N/A'}</p>

        <div
          dangerouslySetInnerHTML={{ __html: data.summary }}
        />

        <p><strong>Genres:</strong> {data.genres.join(', ')}</p>
        <p><strong>Status:</strong> {data.status}</p>
        <p><strong>Premiered:</strong> {data.premiered}</p>
      </div>
    </div>
  );
}

export default ShowDetails;