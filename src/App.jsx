import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";

const App = () => {
  //tarayıcıdaki url e göre ekrana hangi bileşeşnin basılacağını belirle
  // react routerdom tarayıcıdaki url e window nesnesi ile erişir
  return (
    <BrowserRouter>
      {/* Routes dışında bütün sayfalar için ortak  */}
      <Header />

      {/* projedeki sayfaları tanımladığımız bir kapsayısı */}
      <Routes>
        {/* Route projedeki her bir sayfa için tanımlanır
         *Route a yol ve yol için verilecek parametre eklenir
         */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />

        {/* Dynamic Route */}
        <Route path="/ürün/:id" element={<DetailPage />} />

        {/* Nested Routes : iç içe yollar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        {/* Undefined Route : tanımsız bir route yönlenirse */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Routes dışında bütün sayfalar için ortak  */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
