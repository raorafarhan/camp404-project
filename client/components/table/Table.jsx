/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { deleteBook } from "../../api/api.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
const BookTable = ({ books, getAllBooks }) => {
  const navigate = useNavigate();

  const onDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Judul Buku</th>
          <th>Pengarang</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>{index+1}</td>
            <td>{book.judul}</td>
            <td>{book.pengarang}</td>
            <td>
              <Button variant="primary" onClick={()=>{
                navigate('edit')
              }}>Edit</Button>
              <Button
                variant="danger"
                onClick={(ev) => {
                  ev.preventDefault();
                  onDeleteBook(book._id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BookTable;
