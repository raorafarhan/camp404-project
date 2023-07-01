import { useEffect, useState } from "react";
import { getBooks } from "../api/api";
import Layout from "./Layout";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Catalogue = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAllBooks = async () => {
    const data = await getBooks();
    if (data) {
      setBooks(data);
      setLoading(false);
    } else {
      console.log("error get books");
    }
  };
  useEffect(function () {
    getAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <section>
      <Button className="primary" onClick={()=>{
        navigate('/catalogue/add')
      }}>Add Book</Button>
        {loading && <i>Loading Articles ...</i>}
        {!loading && (
          <div className="container d-flex">
            {books.map((book) => {
              return (
                <Card style={{ width: "18rem" }} key={book._id}>
                <Card.Img variant="top" src="https://source.unsplash.com/120x60?book" width={150} height={120} />
                <Card.Body>
                  <Card.Title>{book.judul}</Card.Title>
                  <Card.Text>
                    {book.pengarang}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Catalogue;
