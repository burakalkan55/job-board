import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    Chip,
    useTheme,
  } from "@mui/material";
  import WorkIcon from "@mui/icons-material/Work";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  
  type Job = {
    title: string;
    company_name: string;
    url: string;
    location: string;
    remote: boolean;
  };
  
  type Props = {
    job: Job;
  };
  
  const JobCard: React.FC<Props> = ({ job }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
  
    return (
      <Card
        sx={{
          width: 350,
          m: 2,
          p: 1,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.5)" : "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: isDark ? theme.palette.grey[900] : "#fff",
          transition: "0.3s",
          "&:hover": {
            boxShadow: isDark ? "0 8px 24px rgba(0,0,0,0.6)" : "0 8px 24px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 1,
            }}
          >
            {job.title}
          </Typography>
          <Box display="flex" alignItems="center" mb={1} color="text.secondary">
            <WorkIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
            <Typography variant="body2" color="text.secondary">
              {job.company_name}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.text.secondary }} />
            <Typography variant="body2" color="text.secondary">
              {job.location} {job.remote && "🌐 Remote"}
            </Typography>
          </Box>
          {job.remote && (
            <Chip label="Remote" size="small" color="success" sx={{ mt: 1 }} />
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            fullWidth
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            İLANI GÖR
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default JobCard;
  