import { useState } from "react";
import {
  Box,
  InputBase,
  Paper,
  IconButton,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
      sx={{ mt: 5, mb: 3 }}
    >
      <Paper
        sx={{
          p: "2px 8px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: 5,
          boxShadow: 1,
          backgroundColor: isDark
            ? theme.palette.grey[800]
            : theme.palette.grey[100],
          transition: "all 0.3s ease-in-out",
          "&:focus-within": {
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
          },
        }}
      >
        <IconButton type="submit" sx={{ p: "10px", color: isDark ? "#ffffff" : "#333" }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: isDark ? "#ffffff" : "#000",
            "&::placeholder": {
              color: isDark ? "#ffffff" : "#666",
              opacity: 1,
            },
          }}
          placeholder="Pozisyon ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          inputProps={{ style: { color: isDark ? "#ffffff" : "#000000" } }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBar;
