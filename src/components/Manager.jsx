import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Detail from "./Detail";

import List from "./List";

function Manager({ movies }) {
  const [mode, setMode] = useState("undone");
  const [keyword, setKeyword] = useState("");
  const [overSeven, setOverSeven] = useState(false);
  const [filmId, setFilmId] = useState(null);
  const [doneVariant, setDoneVariant] = useState("secondary");
  const [unDoneVariant, setUnDoneVariant] = useState("secondary");

  useEffect(()=>{
      setUnDoneVariant("dark")
  },[])

  const filterItem = (keyword, overSeven) => {
    return movies
      .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter((item) => (overSeven ? item.rate > 7 : true));
  };

  const data = filterItem(keyword, overSeven).map((item) => ({
    id: item.id,
    text: item.name,
    rate: item.rate,
  }));

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOverSevenChange = (e) => {
    setOverSeven(e.target.checked);
  };

  const handleUnDoneClick = () => {
    setMode("undone");
    setDoneVariant("secondary");
    setUnDoneVariant("dark");
    console.log(mode);
  };

  const handleDoneClick = () => {
    setMode("done");
    setDoneVariant("dark");
    setUnDoneVariant("secondary");
    console.log(mode);
  };

  const handleClick = (id) => {
    setFilmId(id);
  };

  return (
    <Container className="w-md-50">
        {filmId > 0 && <Detail id={filmId} movies={movies} />}
      <Form>
        <Form.Group className="mt-4">
          <Form.Label>
            <h3>
              <b>Keyword</b>
            </h3>
          </Form.Label>

          <Form.Control
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Only Over 7.0"
            checked={overSeven}
            onChange={handleOverSevenChange}
          />
        </Form.Group>
      </Form>
      <Button
        className="mb-4"
        variant={unDoneVariant}
        onClick={handleUnDoneClick}
      >
        Un Done
      </Button>{" "}
      <Button className="mb-4" variant={doneVariant} onClick={handleDoneClick}>
        Done
      </Button>
      <List items={data} onClick={handleClick} mode={mode}/>
    </Container>
    
  );
}

export default Manager;
