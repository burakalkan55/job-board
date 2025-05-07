import { useState } from "react";
import {
  Box,
  InputBase,
  Paper,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      sx={{
        mt: 10,
        mb: 4,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 8px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: 3,
          boxShadow: 1,
          backgroundColor: "#f3f6f9",
        }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Pozisyon ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
