import { useState } from 'react';
import { useSearchShowsQuery } from '../services/tvApi';
import ShowCard from '../components/ShowCard';

function Home() {
  const [search, setSearch] = useState('all');
  const [page, setPage] = useState(1);

  const { data, isLoading } = useSearchShowsQuery(search);

  const itemsPerPage = 40;
  const startIndex = (page - 1) * itemsPerPage;
  const shows = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <input
        className="search"
        placeholder="Search shows..."
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && <p>Loading...</p>}

      <div className="grid">
        {shows?.map((item) => (
          <ShowCard key={item.show.id} show={item.show} />
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;