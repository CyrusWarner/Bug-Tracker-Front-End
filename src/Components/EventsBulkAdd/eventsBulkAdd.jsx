import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const EventsBulkAdd = ({ currentBoard, getAllEvents }) => {
  const { boardId } = currentBoard;
  const [csvFile, setCsvFile] = useState();
  console.log(csvFile);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("inputFile", csvFile);
    debugger
    if(csvFile === undefined){
      toast.error("Please Select A .csv File")
      return;
    }
    if (csvFile.type === "application/vnd.ms-excel") {
      await axios
        .post(
          `http://localhost:27029/api/Events/uploadfile/csv/${boardId}`,
          formData
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Csv Uploaded");
            getAllEvents();
            e.target.reset();
          }
        })
        .catch((err) => {
          if (err) {
            toast.error("Error uploading csv file");
            e.target.reset();
          }
        });
    } else {
      toast.error("Please Upload a file with the .csv extension");
      e.target.reset();
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="file"
          accept=".csv"
          id="csvfile"
          onChange={(e) => setCsvFile(e.target.files[0])}
        ></input>
        <Button type="submit" className="me-2 mt-3">
          Bulk Add
        </Button>
      </Form>
    </div>
  );
};

export default EventsBulkAdd;
