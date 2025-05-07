import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  TextField,
  Paper,
  Stack,
} from "@mui/material";

type FilterProps = {
  filters: {
    remote: boolean;
    location: string;
    company: string;
  };
  onFilterChange: (field: string, value: string | boolean) => void;
};

const FilterBar: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          label="Şirket Ara"
          value={filters.company}
          onChange={(e) => onFilterChange("company", e.target.value)}
        />
        <TextField
          label="Şehir Ara"
          value={filters.location}
          onChange={(e) => onFilterChange("location", e.target.value)}
        />
        <FormControlLabel
          control={
            <Switch
              checked={filters.remote}
              onChange={(e) => onFilterChange("remote", e.target.checked)}
            />
          }
          label="Sadece Remote"
        />
      </Stack>
    </Paper>
  );
};

export default FilterBar;
