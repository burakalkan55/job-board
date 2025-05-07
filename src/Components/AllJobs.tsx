import React from 'react'
import { useState } from 'react'
import { fetchJobs } from '../hooks/Fetching'

function AllJobs() {

    const [jobs, setJobs] = useState<any[]>([]);
    const AllJobsinOne = async (query: string) => {
        const result = await fetchJobs(query);
        setJobs(result);
      };
  return (
    <div>
     
    </div>
  )
}

export default AllJobs
