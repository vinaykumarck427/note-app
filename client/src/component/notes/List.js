import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'
import { setNote, setNotes, removeNote } from "../../actions/notes";
// import {setNote} from '../../actions/note'
import { connect } from "react-redux";



class NoteList extends React.Component {
    componentDidMount() {
        axios
          .get("/notes", {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            this.props.dispatch(setNotes(response.data));
            // this.setState(() => ({ notes: response.data }))
          })
          .catch(err => {
            console.log(err);
          });
    }
    handlePin = (id)  => {
        axios
          .put(
            `/notes/${id}`,
            { isPinned: true },
            {
              headers: {
                "x-auth": localStorage.getItem("userAuthToken")
              }
            }
          )
          .then(response => {
            const notes = this.props.notes.map(note => {
              if (note._id === response.data._id) {
                note.isPinned = response.data.isPinned;
                return note;
              } else {
                return note;
              }
            });
            this.props.dispatch(setNotes(notes));
            // this.setState(() => ({ notes }))
          })
          .catch(err => {
            console.log(err);
          });            
    }
    handleUnPin = (id) => {
        axios
          .put(
            `/notes/${id}`,
            { isPinned: false },
            {
              headers: {
                "x-auth": localStorage.getItem("userAuthToken")
              }
            }
          )
          .then(response => {
            const notes = this.props.notes.map(note => {
              if (note._id === response.data._id) {
                note.isPinned = response.data.isPinned;
                return note;
              } else {
                return note;
              }
            });
            this.props.dispatch(setNotes(notes));

            // this.setState(() => ({notes}))
          })
          .catch(err => {
            console.log(err);
          });
    }

    handleCopy = (note) => {
        let newNote
        if(note){
            newNote = {
                title:note.title,
                body:note.body,
                category:note.category,
                tags:note.tags.map(tag => ({tag:tag.tag})),
                isPinned:note.isPinned
            }
        }
        axios
          .post("/notes", newNote, {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            this.props.dispatch(setNote(response.data));
            // this.setState((prevState) => ({notes:[...prevState.notes,response.data]}))
          })
          .catch(err => {
            console.log(err);
          });
    }
    handleDelete = (id) => {
        axios
          .delete(`/notes/${id}`, {
            headers: {
              "x-auth": localStorage.getItem("userAuthToken")
            }
          })
          .then(response => {
            this.props.dispatch(removeNote(response.data._id));
            // this.setState((prevState) => ({notes:prevState.notes.filter(note => note._id !== response.data._id)}))
          })
          .catch(err => {
            console.log(err);
          });
    }
    render() {
        console.log(this.props.notes)
        const pinNotes = this.props.notes.filter(note => note.isPinned === true)
        const UnpinNotes = this.props.notes.filter(note => note.isPinned === false)
        return(        
            <div>
                {this.props.notes.length !== 0 && (<h1>Listing notes   - {this.props.notes.length}</h1>)}

                 {pinNotes.length !== 0 && (<span><h2>pinned list</h2></span>)}
                 <ul>
                     {pinNotes.map(note => <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link><button onClick={() => { this.handleUnPin(note._id) }}>Unpin</button><button onClick={() => {
                        const confirmRemove = window.confirm("Are you sure?");
                        if (confirmRemove) {
                          this.handleDelete(note._id);
                        }
                    }}>delete</button><button onClick={() => {
                        this.handleCopy(note)}}>copy</button></li>)}
                              </ul>

                 {UnpinNotes.length !== 0 && (<span><h2>unpinned list</h2></span>)}
                 <ul>
                    {UnpinNotes.map(note => <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link><button onClick={() => { this.handlePin(note._id) }}>pin</button><button onClick={() => {
                        const confirmRemove = window.confirm('Are you sure?')
                        if(confirmRemove){
                            this.handleDelete(note._id)
                       }
                    }}>delete</button><button onClick={() => {
                        this.handleCopy(note)}}>copy</button></li>)}
                </ul>

                <Link className="Link" to='/notes/new'>Add Note</Link>
             </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        notes:state.notes
    }
}
export default connect(mapStateToProps)(NoteList);