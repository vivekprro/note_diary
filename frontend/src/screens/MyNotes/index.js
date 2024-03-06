import React, { useEffect, useState } from "react";
import "./myNotes.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes">
      <h1>Welcome User</h1>
      <Button variant="contained" size="large">
        Create Notes
      </Button>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion> */}
      {notes.map((note, i) => (
        <div key={i} className="note">
          <p>{note.title}</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="small" href={`/note/${note._id}`}>
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={(note) => deleteHandler(note.id)}
            >
              Delete
            </Button>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default MyNotes;
