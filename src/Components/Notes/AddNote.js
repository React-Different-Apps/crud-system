import {React,useContext,useState} from 'react'
import { FormControl,TextField, Container,Card,Box,Typography, Button } from '@mui/material';
import {GlobalContext} from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'
import {v1 as uuid} from 'uuid'

const AddNote = () => {
    const {addNote}=useContext(GlobalContext)
    const history=useHistory()
    const [title,setTitle]=useState()
    const [details,setDetails]=useState()
    const changeTitleHandler =(e)=>{
       setTitle(e.target.value)
    }
    const changeDetailsHandler =(e)=>{
        setDetails(e.target.value)
     }
    
    const submitForm = ()=>{
       const newNote={
           id:uuid(),
           title:title,
           details:details
        }
       
       addNote(newNote) 
       history.push('/')
    }

    return (
        <div>
         <Container  align="center" sx={{marginTop:5}}> 
           
         <Box
           onSubmit={submitForm}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, p:2,width: '40ch' },
            }}
            noValidate
            autoComplete="off"
            >   
         <Card> 
         <Typography variant="h5" color="textPrimary" align="center" paragraph>
            ADD NEW Note
          </Typography>        
          <FormControl>
          <TextField  id="standard-basic" value={title} label="Title" variant="standard" onChange={changeTitleHandler} />
          <TextField id="standard-basic" value={details} label="Details" variant="standard" onChange={changeDetailsHandler} />
          <Button type="submit" variant="contained" sx={{marginTop:2}}>Add</Button>
          </FormControl>
         </Card> 
         </Box>
         </Container> 
        </div>
    )
}

export default AddNote
