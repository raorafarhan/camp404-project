
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/api.js";
import Layout from "./Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddBookPage = () => {
  const navigate = useNavigate();

  const [bookPayload, setBookPayload] = useState({
    judul: "",
    pengarang: "",
  });

  const onSubmitAddBook = async (ev) => {
    ev.preventDefault();
    const res = await addBook(bookPayload);
    if (res) {
      navigate("/catalogue");
    } else {
      console.log("error add book");
    }
  };

  return (
    <Layout>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Judul</Form.Label>
      <Form.Control type="text" placeholder="Enter Judul" onChange={(ev) => {
        setBookPayload({
          ...bookPayload,
          judul: ev.target.value,
        })
        
      }}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Pengarang</Form.Label>
      <Form.Control type="text" placeholder="Enter Pengarang" onChange={(ev) => {
        setBookPayload({
          ...bookPayload,
          pengarang: ev.target.value,
        });
      }}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={onSubmitAddBook}>
      Submit
    </Button>
  </Form>
    </Layout>
  );
};

export default AddBookPage;
