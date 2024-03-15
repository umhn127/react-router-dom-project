import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  //navigate ile aktarılan hata mesajına eriş
  const loc = useLocation();
  return (
    <div className="container py-5 d-flex flex-column g-4 align-items-center">
      {/* hata mesajı */}
      {loc.state && <p className="bg-danger rounded p-2">{loc.state}</p>}
      <img className="img-fluid rounded w-75" src="/books-404.gif" alt="" />
      <div>
        <h1>Aradığınız sayfa bulunamadı</h1>

        <p>
          Böyle bir sayfa bulunamıyor.Anasayfa'ya dönüp başka bir şey
          arayabilirsiniz
        </p>

        <Link to={"/"} className="btn btn-warning">
          Anasayfa'ya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
