import React, { useState, useEffect } from 'react';
import { fetchJobs } from './mockJobApi';
import './JobBoard.css';

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    role: '',
    level: '',
    location: ''
  });
  // Effect to fetch initial job data
  useEffect(() => {
    fetchJobs(filters).then(data => {
      setJobs(data);
      setIsLoading(false);
    });
  }, [filters]); // Empty dependency array

  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // const newFilters = filters; // State mutation bug
    // newFilters[name] = value;
    setFilters(prev=>({...prev,[name]:value}));
  };
  
  const handleClearFilters = () => {
    const clearFilters = {
        role: '',
        level: '',
        location: ''
    };
    // The component does not re-fetch with cleared filters
  };

  if (isLoading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div className="job-board">
      <div className="filters">
        <select name="role" onChange={handleFilterChange}>
          <option value="">Filter by Role</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="FullStack">FullStack</option>
        </select>
        <select name="level" onChange={handleFilterChange}>
          <option value="">Filter by Level</option>
          <option value="Junior">Junior</option>
          <option value="Midweight">Midweight</option>
          <option value="Senior">Senior</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Filter by location..."
          onChange={handleFilterChange}
        />
        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>
      
      <div className="job-list">
        {jobs.map(job => (
          <div className="job-card">
            <h3>{job.position}</h3>
            <div className="details">
              <span>{job.company}</span>
              <span>{job.location}</span>
            </div>
            <div className="tags">
              <span className="tag">{job.role}</span>
              <span className="tag">{job.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobBoard;