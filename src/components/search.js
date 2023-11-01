import React from 'react';

export default function Search({ search, setSearch }) {
  return (
    <div>
  <input className="form-control me-2" type="search" aria-label="Search" placeholder="Search by description" value={search} onChange={(e) => setSearch(e.target.value)} />

    </div>
  );
}
