import { useParams } from 'react-router-dom';
import { useGetShowByIdQuery } from '../services/tvApi';
import Loader from '../components/Loader';

function ShowDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetShowByIdQuery(id);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error loading details.</p>;

  return (
    <div className="details">
      <img src={data.image?.medium} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.summary }} />
        <p><strong>Genres:</strong> {data.genres.join(', ')}</p>
        <p><strong>Rating:</strong> {data.rating?.average}</p>
      </div>
    </div>
  );
}

export default ShowDetails;