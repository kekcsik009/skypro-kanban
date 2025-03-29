import styles from './Card.module.css'; // Убедитесь, что файл существует

export default function Card({ title, theme, date }) {
  return (
    <div className={`${styles.card} ${theme ? styles[`theme-${theme}`] : ''}`}>
      <h3>{title}</h3>
      {date && <p>{new Date(date).toLocaleDateString()}</p>}
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.string,
  date: PropTypes.string
};
// document.querySelectorAll('.card').length