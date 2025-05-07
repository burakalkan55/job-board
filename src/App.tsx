import { useState } from "react";
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import JobCard from "./Components/JobCard";
import { fetchJobs } from "./hooks/Fetching";
import { Box, Typography, Pagination, Stack } from "@mui/material";


function App() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  const [filters, setFilters] = useState({
    remote: false,
    location: "",
    company: "",
  });

  const handleSearch = async (query: string) => {
    const result = await fetchJobs(query);
    setJobs(result);
    setCurrentPage(1); // Yeni arama yapıldığında ilk sayfaya dön
  };

  const onFilterChange = (field: string, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
    setCurrentPage(1); // Filtre değiştiğinde ilk sayfaya dön
  };

  const filteredJobs = jobs.filter((job) => {
    const matchRemote = filters.remote ? job.remote === true : true;
    const matchLocation = job.location
      ?.toLowerCase()
      .includes(filters.location.toLowerCase());
    const matchCompany = job.company_name
      ?.toLowerCase()
      .includes(filters.company.toLowerCase());

    return matchRemote && matchLocation && matchCompany;
  });

  // Pagination hesaplamaları
  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ pt: 10, px: 3, pb: 6 }}>
      <Header onSearch={handleSearch} />
      <FilterBar filters={filters} onFilterChange={onFilterChange} />

      {jobs.length > 0 && (
        <Typography
          variant="subtitle1"
          sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}
        >
          Toplam {filteredJobs.length} ilan bulundu
        </Typography>
      )}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap={3}
        sx={{ mt: 4 }}
      >
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => (
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
            Aramanızla eşleşen iş ilanı bulunamadı 🥲
          </Typography>
        )}
      </Box>
      
    

      {pageCount > 1 && (
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Pagination 
            count={pageCount} 
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Stack>
      )}
    </Box>
  );
}

export default App;