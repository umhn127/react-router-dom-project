import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column gap-5">
      <h1 className="text-center mt-2">HOŞGELDİNİZ</h1>
      <img className="img-fluid" src="/books.jpg" />

      <p className="text-center">
        <Link to={"/ürünler"}>Ürünler Sayfasında</Link> yeni çıkan bütün
        kitaplara ulaşablirsiniz...
      </p>
    </div>
  );
};

export default MainPage;
