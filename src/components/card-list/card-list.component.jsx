import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = ({ monsters }) => {
  return (
    <div>
      <CardContainer monsters={monsters} />;
    </div>
  );
};

export default CardList;
