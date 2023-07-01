/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { updateBook, getBookById } from "../api/api.js";
import Layout from "./Layout.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditBookPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [book, setBook] = useState({});
    const [bookPayload, setBookPayload] = useState({});
  
    const onSubmitEditBook = async (ev) => {
      ev.preventDefault();
      const res = await updateBook(params.id, bookPayload);
      if (res) {
        navigate("/");
      } else {
        console.log("error update book");
      }
    };
  
    const onFetchBook = async () => {
      const data = await getBookById(params.id);
      if (data) {
        setBook(data);
      } else {
        console.log("error get book by id");
      }
    };
  
    // eslint-disable-next-line no-undef
    useEffect(() => {
      if (params) {
        onFetchBook();
      }
    }, [params]);

  return (
    <Layout>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Judul</Form.Label>
      <Form.Control type="text" placeholder="Enter Judul" defaultValue={book.judul} onChange={(ev) => {
        setBookPayload({
          ...bookPayload,
          judul: ev.target.value,
        })
        
      }}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Pengarang</Form.Label>
      <Form.Control type="text" placeholder="Enter Pengarang" defaultValue={book.pengarang} onChange={(ev) => {
        setBookPayload({
          ...bookPayload,
          pengarang: ev.target.value,
        });
      }}/>
    </Form.Group>
    <Button variant="primary" type="submit" onClick={(ev) => {
      onSubmitEditBook(ev);
    }}>
      Submit
    </Button>
  </Form>
    </Layout>
  );
};

export default EditBookPage;
