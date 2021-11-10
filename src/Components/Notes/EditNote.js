import {React,useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FormControl,TextField, Container,Card,Box,Typography, Button } from '@mui/material';
import {GlobalContext} from '../Context/GlobalState'
import {useHistory} from 'react-router-dom'

const EditNote = (props) => {
    const params=useParams()
    const history=useHistory()
    const {notes,editNote}=useContext(GlobalContext)
    const [selectedNote,setSelectedNote]=useState({
        id:'',
        title:'',
        details:''
    })
    
    const currentNoteId=params.id
    useEffect(()=>{
        const noteId=currentNoteId
        const selectedNote=notes.find(note=>note.id === noteId)
        setSelectedNote(selectedNote)
    },[currentNoteId, notes])
    

    const changeTitleHandler =(e)=>{
        setSelectedNote({...selectedNote, [e.target.name]: e.target.value})
        }
        const changeDetailsHandler =(e)=>{
            setSelectedNote({...selectedNote, [e.target.name]: e.target.value})
            }

    const submitForm = ()=>{
       editNote(selectedNote) 
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
              Edit Note {params.id}
            </Typography>        
            <FormControl>
            <TextField  id="standard-basic" name="title" onChange={changeTitleHandler} value={selectedNote.title} label="Title" variant="standard" />
            <TextField id="standard-basic" name="details" label="Details" onChange={changeDetailsHandler} value={selectedNote.details} variant="standard" />
            <Button type="submit" variant="contained" color="success" sx={{marginTop:2}}>Edit</Button>
            </FormControl>
           </Card> 
           </Box>
           </Container> 
        </div>
    )
}

export default EditNote
