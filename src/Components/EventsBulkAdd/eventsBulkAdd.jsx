import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const EventsBulkAdd = ({ currentBoard }) => {
  const { boardId } = currentBoard;
  const [csvFile, setCsvFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", csvFile);
    await axios
      .post(
        `http://localhost:27029/api/Events/uploadfile/csv/${boardId}`,
        formData,
        { headers: { "content-type": "multipart/form-data" } }
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Csv Uploaded");
          e.target.reset();
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" className="me-2">
          Bulk Add Events
        </Button>
        <input
          type="file"
          accept=".csv"
          id="csvfile"
          onChange={(e) => setCsvFile(e.target.files[0])}
        ></input>
      </Form>
    </div>
  );
};

export default EventsBulkAdd;
