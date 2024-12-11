import React, { useState } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const availableTags = ["Boissons", "Plats", "Crepes", "Coffee"];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = availableTags.filter((tag) =>
        tag.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query) {
      alert(`You searched for: ${query}`);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
      <div className="p-2">
        <form onSubmit={handleSearchSubmit} autoComplete="off">
          <div className="mb-2 flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                id="tags"
                placeholder="Search Recipe"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={query}
                onChange={handleSearchChange}
              />
              {/* Autocomplete suggestions */}
              {filteredResults.length > 0 && (
                <ul className="absolute w-full bg-white shadow-lg max-h-40 overflow-y-auto z-10 border border-gray-200 rounded-md mt-1">
                  {filteredResults.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => setQuery(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
