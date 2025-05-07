// Header.tsx düzeltilmiş kısa ve temiz hali:

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemaContext";
import SearchBar from "./SearchBar";

type Props = {
  onSearch: (query: string) => void;
};

const Header = ({ onSearch }: Props) => {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Job Board</Typography>
        </Box>

        <Box sx={{ flexGrow: 0, mx: 2 }}>
          <SearchBar onSearch={onSearch} />
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
