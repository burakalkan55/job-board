import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Paper,
  InputBase,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState, useContext } from "react";
import { ColorModeContext } from "../context/ThemaContext";

type Props = {
  onSearch: (query: string) => void;
};

const Header = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isDark
          ? theme.palette.background.paper
          : theme.palette.primary.main,
        color: theme.palette.getContrastText(
          isDark ? theme.palette.background.paper : theme.palette.primary.main
        ),
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Job Board</Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Paper
            sx={{
              p: "2px 8px",
              display: "flex",
              alignItems: "center",
              width: 350,
              borderRadius: 3,
              backgroundColor: isDark
                ? theme.palette.grey[800]
                : theme.palette.grey[100],
            }}
          >
            <IconButton sx={{ p: "10px", color: isDark ? "#fff" : "#333" }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Pozisyon ara"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                ml: 1,
                flex: 1,
                color: isDark ? "#fff" : "#000",
                "&::placeholder": {
                  color: isDark ? "#ffffff" : "#666",
                  opacity: 1,
                },
              }}
              inputProps={{
                style: { color: isDark ? "#ffffff" : "#000000" },
              }}
            />
          </Paper>
        </Box>

        <Box>
          <IconButton color="inherit" onClick={toggleColorMode}>
            <DarkModeIcon />
          </IconButton>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
