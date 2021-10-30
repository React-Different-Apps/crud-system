import React from 'react'
import {Typography, Container} from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    landing: {
        marginTop:'100px'
    },
  });

const LandingSection = () => {
    const classes = useStyles();
    return (
        <div>
        <Container maxWidth="sm" className={classes.landing}>
          <Typography variant="h2" color="textPrimary" gutterBottom align="center">
            Notify Me
          </Typography>
          <Typography variant="h5" color="textSecondary" align="center" paragraph>
            Lorem velit labore laboris quis veniam esse in ea nisi non in fugiat ipsum minim. 
          </Typography>
          
        </Container>
      </div>
    )
}

export default LandingSection
