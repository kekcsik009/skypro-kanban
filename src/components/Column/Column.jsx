import Card from "../Card/Card";
import { ColumnCard, ColumnTitle, MainColumn } from "./SColumn";

const Column = ({ status, cards }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>
      <ColumnCard>
        {cards.map((card) => {
          return (
            <Card
              date={card.date}
              title={card.title}
              theme={card.theme}
              key={card.id}
              cat={card.cat}
            />
          );
        })}
      </ColumnCard>
    </MainColumn>
  );
};
export default Column;