import Layout from "./Layout";
import BookTable from '../components/table/Table'
import { useEffect, useState } from "react";
import { getBooks } from "../api/api";

export const Management = () => {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const data = await getBooks();
    if (data) {
      setBooks(data);
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
      <div>
      <BookTable books={books} getAllBooks={getAllBooks}></BookTable>
      </div>
    </Layout>
  );
};
