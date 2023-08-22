import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return <CardContainer monsters={monsters} />;
  }
}

export default CardList;
