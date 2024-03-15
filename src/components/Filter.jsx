import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // useSearchParams url deki arama parametrelerini yönetmemizi sağlar
  // geriye dizi içeriisnde iki değer döndürür
  // 1- url deki arama parametreleri
  //2- bunları değiştirmeye yarayan method
  const [searchParams, setSearchParams] = useSearchParams();
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    //sayfa yenilemeyi engelle
    e.preventDefault();

    //aratılan terimi arama parametre olarak ekle
    searchParams.set("aramaTerimi", e.target[0].value);

    //url i güncelle
    setSearchParams(searchParams);
  };

  // select değişince
  const handleChange = (e) => {
    //eklenecek parametreyi belirle
    searchParams.set("sırala", e.target.value);

    //url i güncelle
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center">
        <label>Sırala</label>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select"
        >
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          placeholder="aratılacak metin"
          className="form-control"
          type="text"
        />
        <button className="btn btn-warning">Ara</button>
      </form>
    </div>
  );
};

export default Filter;
