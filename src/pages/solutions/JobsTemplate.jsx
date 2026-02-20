import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobListings, functions, jobRoles, ITEMS_PER_PAGE } from "../../data/jobsData.js";

export function JobsListing() {
  const navigate = useNavigate();
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [showFunctions, setShowFunctions] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
    setVisibleCount(ITEMS_PER_PAGE);
    setShowRoles(false);
  };

  const filtered = jobListings.filter((job) => {
    const matchFn = selectedFunction ? job.function === selectedFunction : true;
    const matchRole = selectedRoles.length ? selectedRoles.includes(job.role) : true;
    const matchSearch = searchText
      ? job.title.toLowerCase().includes(searchText.toLowerCase())
      : true;
    return matchFn && matchRole && matchSearch;
  });

  const visible = filtered.slice(0, visibleCount);

  const clearAll = () => {
    setSelectedFunction(null);
    setSelectedRoles([]);
    setSearchText("");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const hasFilters = selectedFunction || selectedRoles.length || searchText;

  return (
    <div id="jobs-listing" className="min-h-screen bg-white"> {/* Changed from bg-gray-50 to bg-white */}

      {/* Filter Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-16 py-6">
        <div className="flex items-stretch border border-gray-300 rounded-md max-w-4xl mx-auto bg-white overflow-visible">

          {/* Function Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => { setShowFunctions((v) => !v); setShowRoles(false); }}
              className="flex items-center justify-between w-full h-full px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-r border-gray-300 bg-white"
            >
              <span>{selectedFunction || "Functions"}</span>
              <svg className="w-4 h-4 text-pink-600 ml-3 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showFunctions && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg min-w-48 z-50 py-1.5">
                <div
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${selectedFunction === null ? "font-semibold text-pink-600" : "text-gray-700"} bg-white`}
                  onClick={() => { setSelectedFunction(null); setShowFunctions(false); setVisibleCount(ITEMS_PER_PAGE); }}
                >All Functions</div>
                {functions.map((fn) => (
                  <div
                    key={fn}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${selectedFunction === fn ? "font-semibold text-pink-600" : "text-gray-700"} bg-white`}
                    onClick={() => { setSelectedFunction(fn); setShowFunctions(false); setVisibleCount(ITEMS_PER_PAGE); }}
                  >{fn}</div>
                ))}
              </div>
            )}
          </div>

          {/* Job Roles Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => { setShowRoles((v) => !v); setShowFunctions(false); }}
              className="flex items-center justify-between w-full h-full px-5 py-4 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-r border-gray-300 bg-white"
            >
              <span>{selectedRoles.length ? `${selectedRoles.length} Role${selectedRoles.length > 1 ? "s" : ""}` : "Job Roles"}</span>
              <svg className="w-4 h-4 text-pink-600 ml-3 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showRoles && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg min-w-52 z-50 py-1.5">
                {jobRoles.map((role) => (
                  <label
                    key={role}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors bg-white"
                    onClick={() => toggleRole(role)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRoles.includes(role)}
                      onChange={() => { }}
                      className="accent-pink-600 w-3.5 h-3.5"
                    />
                    {role}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center flex-1 px-4 py-3 bg-white">
            <svg className="w-4 h-4 text-gray-400 shrink-0 mr-2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="9" r="6" /><path d="M15 15l3 3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search here"
              value={searchText}
              onChange={(e) => { setSearchText(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
              className="bg-transparent outline-none text-sm text-gray-800 w-full placeholder-gray-400"
            />
            {searchText && (
              <button onClick={() => setSearchText("")} className="text-gray-400 hover:text-gray-600 text-xs ml-1">✕</button>
            )}
          </div>

          {/* Refresh icon */}
          <button
            onClick={clearAll}
            title="Clear filters"
            className="flex items-center justify-center px-4 border-l border-gray-300 text-gray-400 hover:text-pink-600 transition-colors bg-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 4v6h-6" /><path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>

        </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-3 gap-5 px-6 py-5 max-w-7xl mx-auto bg-white">
        {visible.length === 0 ? (
          <div className="col-span-full text-center py-16 text-gray-400 text-base bg-white">
            No positions match your search.
          </div>
        ) : visible.map((job) => (
          <div
            key={job.id}
            onClick={() => navigate(`/job-description/${job.slug}`)}
            className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 cursor-pointer text-gray-900 shadow-sm hover:shadow-lg hover:border-pink-400 hover:-translate-y-1 transition-all duration-200"
          >
            <span className="self-start text-xs uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
              {job.function}
            </span>
            <h3 className="text-base font-medium leading-snug">{job.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="8" /><path d="M10 6v4l3 2" strokeLinecap="round" />
                </svg>
                {job.experience}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2C7 2 4 5 4 8c0 5 6 10 6 10s6-5 6-10c0-3-3-6-6-6z" /><circle cx="10" cy="8" r="2" />
                </svg>
                {job.location}
              </span>
            </div>
            <div className="mt-auto pt-1 text-xs text-pink-600 group-hover:underline">
              View & Apply →
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="text-center px-6 pb-14 bg-white">
          <button
            onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
            className="bg-gray-900 text-white text-sm px-8 py-3 rounded-xl hover:bg-gray-700 transition-colors"
          >
            Load More Positions
          </button>
        </div>
      )}
    </div>
  );
}