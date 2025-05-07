import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    Chip,
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
    return (
      <Card
        sx={{
          width: 350,
          m: 2,
          p: 1,
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#1a1a1a",
              mb: 1,
            }}
          >
            {job.title}
          </Typography>
          <Box display="flex" alignItems="center" mb={1} color="text.secondary">
            <WorkIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">{job.company_name}</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon fontSize="small" sx={{ mr: 0.5, color: "gray" }} />
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
          >
            İLANI GÖR
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default JobCard;
  