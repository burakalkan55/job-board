import { useState } from "react";
import Header from "./Components/Header";
import { fetchJobs } from "./hooks/Fetching";
import JobCard from "./Components/JobCard";
import { Box, Typography } from "@mui/material";

function App() {
  const [jobs, setJobs] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    const result = await fetchJobs(query);
    setJobs(result);
    console.log("Gelen işler:", result);
  };

  return (
    <Box sx={{ pt: 10, px: 3, pb: 6 }}> {/* Sayfaya padding top ve side */}
      <Header onSearch={handleSearch} />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap={3}
        sx={{ mt: 4 }} // Header'dan boşluk
      >
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard
              key={index}
              job={{
                title: job.title,
                company_name: job.company_name,
                url: job.url,
                location: job.location,
                remote: job.remote,
              }}
            />
          ))
        ) : (
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            sx={{ mt: 10 }}
          >
            🔍 Arama yaparak ilanları görüntüleyebilirsiniz.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
