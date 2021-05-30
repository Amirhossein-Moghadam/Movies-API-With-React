import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./ListItem";

const List = ({ items, onClick, mode }) => {
  return (
    <ListGroup>
      {items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          rate={item.rate}
          mode={mode}
       
          onClick={() => onClick(item.id)}
        />
      ))}
    </ListGroup>
  );
};

export default List;
