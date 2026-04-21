import { useState } from 'react';
import {
  useGetShowsQuery,
  useSearchShowsQuery
} from '../services/tvApi';
import ShowCard from '../components/ShowCard';

function Home() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { data: showsData, isLoading } = useGetShowsQuery(page);
  const { data: searchData } = useSearchShowsQuery(search, {
    skip: !search,
  });

  const dataToUse = search ? searchData?.map(item => item.show) : showsData;

  return (
    <div>
      <input
        className="search"
        placeholder="Search shows..."
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(0);
        }}
      />

      {isLoading && <p>Loading...</p>}

      <div className="grid">
        {dataToUse?.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      {!search && (
        <div className="pagination">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>Page {page + 1}</span>

          <button onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;