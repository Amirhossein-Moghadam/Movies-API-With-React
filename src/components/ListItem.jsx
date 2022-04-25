import { Button, ListGroup, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const ListItem = ({ text, rate, onClick, mode }) => {
  const [movieRender, setMovieRender] = useState(false);
  const handleUndoneMovieMode = () => {
    setMovieRender(true);
  };

  const handleDoneMovieMode = () => {
    setMovieRender(false);
  };

  if (mode === "undone") {
    return (
      <>
        {movieRender === false && (
          <ListGroup.Item
            variant="light"
            className="mb-2 d-flex justify-content-between"
          >
            <div>
              <b className="text-dark">{`${text} , ${rate}`}</b>
              <Badge
                variant="info"
                className="ml-2"
                onClick={onClick}
                style={{ cursor: "pointer", color: "white" }}
              >
                Detail
              </Badge>
            </div>

            <Button
              variant="success"
              onClick={handleUndoneMovieMode}
              className="ml-4 btn-sm px-3"
            >
              Done
            </Button>
          </ListGroup.Item>
        )}
      </>
    );
  }
  if (mode === "done") {
    return (
      <>
        {movieRender === true && (
          <ListGroup.Item
            variant="light"
            className="mb-2 d-flex justify-content-between"
          >
            <div>
              <b className="text-dark">{`${text} , ${rate}`}</b>
              <Badge
                variant="info"
                className="ml-2 badge-pill"
                style={{ cursor: "pointer" }}
                onClick={onClick}
              >
                Detail
              </Badge>
            </div>

            <Button
              variant="danger"
              onClick={handleDoneMovieMode}
              className="ml-4 btn-sm px-3"
            >
              Un Done
            </Button>
          </ListGroup.Item>
        )}
      </>
    );
  }
};

export default ListItem;
