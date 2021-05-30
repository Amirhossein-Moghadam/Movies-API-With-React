import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Loading from "./components/loading/loading";

import Manager from "./components/Manager";
import ModalCreator from "./components/ModalCreator";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://my-json-server.typicode.com/bemaxima/fake-api/movies")
        .then((response) => response.json())
        .then((response) => {
          setMovies(response);
          setLoading(false);
        });
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Loading />
      </Container>
    );
  }
  return (
    <>
      <Manager movies={movies} />
      <ModalCreator />
    </>
  );
}

export default App;
