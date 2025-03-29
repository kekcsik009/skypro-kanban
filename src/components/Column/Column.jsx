import styles from './Column.module.css';

export default function Column({ title, cards = [], onCardClick }) { // Добавьте пропс onCardClick
  return (
    <div className={styles.column}>
      <h2 className={styles.column__title}>{title}</h2>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div 
          key={card.id || crypto.randomUUID()} // Уникальный ключ, даже если id нет
          onClick={() => onCardClick?.(card)}
        >
            <Card
              title={card.title || "Без названия"} 
              theme={card.theme || "default"}
              date={card.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
import PropTypes from 'prop-types';

Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      theme: PropTypes.string,
      date: PropTypes.string
    })
  ),
  onCardClick: PropTypes.func
};
