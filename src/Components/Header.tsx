import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Paper,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const Header = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        {/* Sol taraf */}
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Job Board</Typography>
        </Box>

        {/* Orta kısım: Search */}
        <Box component="form" onSubmit={handleSubmit}>
  <Paper
    sx={{
      p: "2px 8px",
      display: "flex",
      alignItems: "center",
      width: 350,
      borderRadius: 3,
      backgroundColor: "#f3f6f9",
    }}
  >
    <IconButton sx={{ p: "10px" }}>
      <SearchIcon />
    </IconButton>
    <InputBase
      placeholder="Pozisyon ara"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{ ml: 1, flex: 1 }}
    />
  </Paper>
</Box>


        {/* Sağ taraf */}
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
