import { useState } from 'react';
import { useSearchShowsQuery } from '../services/tvApi';
import ShowCard from '../components/ShowCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

function Home() {
  const [search, setSearch] = useState('all');
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useSearchShowsQuery(search);

  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const shows = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <input
        className="search"
        placeholder="Search TV shows..."
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && <Loader />}
      {isError && <p>Error loading data.</p>}

      <div className="grid">
        {shows?.map((item) => (
          <ShowCard key={item.show.id} show={item.show} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalItems={data?.length || 0}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default Home;