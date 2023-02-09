import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "Lovely Professional University, Punjab",
      description:
        "B.tech CSE",
       date: "2020-2024",
    },
    {
      title: "Shri Vinayak Academy International School",
      description:
        "HSC",
        date: "2019-2020",
      },
    {
      title: "Shri Vinayak Academy International School",
      date: "2017-2018",
      description:
        "SSC",
    },
  ];
  const workExp = [
    {
      title: "Razorpay-Clone",
      date: ["HTML , ", "Tailwind CSS , ", "Responsive-Design  "],
      responsibility: ["HTML", "Tailwind CSS", "Responsive-Design"],
    },
    {
      title: "Disk-Scheduling Algorithm",
      date:["HTML , ", "CSS , ", "Responsive-Design , ", "Bootstrap , ", "Javascript "],
      responsibility: ["Validate CSS", "Project Management"],
    },
    {
      title: "Note-Keeper",
      date: ["React.js , ", "CSS"],
      responsibility: ["Validate CSS", "Project Management"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Education
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                  
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Personal Projects
              </Typography>
              {workExp.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;
