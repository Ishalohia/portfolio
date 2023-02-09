/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import boy from "../assets/boy-img.png";
import DownloadIcon from "@mui/icons-material/Download";

function AboutMe() {
  const skills = ["HTML", "CSS", "Tailwind CSS", "Javascript","Bootstrap", "React.js"];
  return (
    <>
      <Box sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img src={boy} style={{ width: "88%" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                About Me
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Hello, I’m Isha, web-developer based on India. I have rich
                experience in web site design & building and customization 
                by using my technical and innovative skills.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  flexWrap: "wrap",
                  my: 3,
                }}
              >
                {skills.map((item) => {
                  return (
                    <button
                      key="item"
                      style={{
                        padding: "8px",
                        backgroundColor: "transparent",
                        border: "2px solid #0CBBA0",
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </Box>
              <Button
                variant="contained"
                size="medium"
                sx={{ backgroundColor: "#0CBBA0", width: "200px" }}
                endIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default AboutMe;
