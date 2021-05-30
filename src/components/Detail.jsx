import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DetailLoading from "./detail-loading/DetailLoading";
import ModalCreator from "./ModalCreator";

const Detail = ({ movies, id }) => {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [description, setDescription] = useState("");

  const getServerData = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 1000);
    });
  };

  const fetchData = (id) => {
    setLoading(true);
    getServerData(id).then(() => {
      movies
        .filter((item) => item.id === id)
        .map((item) => {
          setMovieName(item.name);
          setDescription(item.description);
        });
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return loading ? (
    <Container className="d-flex justify-content-center">
      <DetailLoading />
    </Container>
  ) : (
    <ModalCreator
      showModal={showModal}
      movieName={movieName}
      description={description}
    />
  );
};

export default Detail;
