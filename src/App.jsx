import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
        .then((res) => {
          setWordData(res.data);
          setError("");
          console.log(res.data);
        })
        .catch((err) => {
          setWordData(null);
          setError("Not found");
          console.error(err);
        });
    }
  }, [searchTerm]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setSearchTerm(value.trim());
    }
  };

  return (
    <>
      <Header />
      <Main value={value} setValue={setValue} onSubmit={onSubmit} />
      <Info error={error} wordData={wordData && wordData[0]} />
    </>
  );
}

export default App;
