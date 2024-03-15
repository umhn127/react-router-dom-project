//Layout extra ayarlar ve kategorile sayfasını kapsayan route a verdiğimiz bileşen
//Kapsayıcı route a bileşen verdiğimiz zaman alt route lardan hangisine gidersek gidelim kapsayıcı route un bileşeni ile karşılaşırız
//Nested route nun kullanım alanları
//1 sadece bir kaç sayfada ortak kullanılacak alanları belirlemeye yarar
//2 projedeki bazı sayfaların hangi tipteki kullanıcılar tarafından erişilebilir olduğunu tanımlamamıza yarar

import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";

const Layout = () => {
  // api den alındığını varsayalım
  const navigate = useNavigate();

  const user = {
    name: "uma",
    type: "admin",
  };

  //eğerki kullanıcıtipi admin değilse alt route lara erişime izin verme
  if (user.type !== "admin") {
    //? 1) hook kullanımı
    //render işlemi bitmeden önce yönlendirdiği için uyarı veriyor
    // navigate("/");
    //? 2) bileşen ile yönlendirme
    //bu yöntemi kullanmalıyız
    return <Navigate to={"/"} />;
  }
  return (
    <div className="d-flex gap-5 p-5">
      <aside className="d-flex flex-column bg-light p-3 rounded">
        <NavLink to={"/ekstra/kategoriler"}>Kategoriler</NavLink>
        <NavLink to={"/ekstra/kampanyalar"}>Kampanyalar</NavLink>
        <NavLink to={"/ekstra/ayarlar"}>Ayarlar</NavLink>
      </aside>

      <div>
        {/*
         *Asıl sayfa içeriği
         * Alt route un kapsayıcı route içerisinde hangi noktada ekrana basılacağını belirler
         */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
