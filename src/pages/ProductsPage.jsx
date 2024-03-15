import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams] = useSearchParams();

  //url deki arama prametrelerine eriş
  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  console.log(order, query);

  //Bileşenin ekrana basılma olayını izle
  useEffect(() => {
    //api ye gönderilecek olan parametreleri belirle
    const params = {
      _sort: "title",
      _order: order === "z-a" ? "desc" : "asc",
      q: query,
    };

    // api den kitap verilerini al ve state e aktar
    axios
      .get("http://localhost:3000/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order - query]);
  return (
    <div className="flex-grow-1 p-5">
      <h3>{books?.length} kitap bulundu</h3>

      <Filter />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 mt-3">
        {books?.map((book) => (
          <div key={book.id} className="col">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
