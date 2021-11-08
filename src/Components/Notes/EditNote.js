import React from 'react'
import { useParams,Route,Link } from 'react-router-dom'
import { FormControl,TextField, Container,Card,Box,Typography, Button } from '@mui/material';

const EditNote = () => {
    const params=useParams()
    return (
        <div>
           <Container  align="center" sx={{marginTop:5}}> 
           
           <Box
             
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, p:2,width: '40ch' },
              }}
              noValidate
              autoComplete="off"
              >   
           <Card> 
           <Typography variant="h5" color="textPrimary" align="center" paragraph>
              Edit Note {params.id}
            </Typography>        
            <FormControl>
            <TextField  id="standard-basic" label="Title" variant="standard" />
            <TextField id="standard-basic" label="Details" variant="standard" />
            <Button type="submit" variant="contained" color="success" sx={{marginTop:2}}>Edit</Button>
            </FormControl>
           </Card> 
           </Box>
           </Container> 
        </div>
    )
}

export default EditNote
