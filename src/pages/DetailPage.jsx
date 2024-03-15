import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  // Dinamik sayfa:
  // Sayfa dizaynı aynı kalırken içeriğinin dinamik şekilde genelde url'de parametreye göre değiştiği sayfalardır.
  // Örn: Youtube Video Sayfası | Netflix Film Sayfası | Amazon Ürün Sayfası

  const [book, setBook] = useState(null);

  //1 url deki id parametresini al
  //useParams url e eklenmiş olan pathParamsa erişim sağlar

  const { id } = useParams();

  //* useNavigate fonksiyonunu çağırıp yönlendirme görevini yapacak olan fonksiyonaa erişme
  const navigate = useNavigate();

  //2 id sini bildiğimiz kitabın bilgilerini api den al
  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        //ürünün bilgisi api den gelmediyse kullanıcıyı 404 e yönlendir
        //hata mesajını 404 sayfasına aktar (navigate 2.parametresi ile)
        navigate("/undefined", { state: err.message });
      });
  }, []);

  return (
    <div>
      {/* kitap verisi gelmediyse loader bas */}
      {!book && <p>Yükleniyor...</p>}

      {/* kitap verisi geldiyse */}
      {book && (
        <div className="row my-5 p-5 ">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              style={{ maxHeight: "400px" }}
              className="rounded img-fluid shadow"
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo label="Yazar" value={book.author} />
              <BookInfo label="Açıklama" value={book.description} />
              <BookInfo label="Yıl" value={book.year} />
              <BookInfo label="Sayfa Sayısı" value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;

//2.component
import React from "react";

const BookInfo = ({ label, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-warning me-3">{label}</span>
      <span>{value}</span>
    </p>
  );
};
