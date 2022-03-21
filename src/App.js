import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import Nav from "./components/Nav";

function App() {
  let rickapi = `https://rickandmortyapi.com/api/character/?page=1`;
  useEffect(() => {
    (async function () {
      let data = await fetch(rickapi).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [rickapi]);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
