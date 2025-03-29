import { useState } from 'react';
import Calendar from "../../Calendar/Calendar";
import styles from './PopNewCard.module.css';

export default function PopNewCard({ isOpen, onClose, onSubmit }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    date: new Date(),
    category: 'webdesign'
  });

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <h3>Создание задачи</h3>
          <button onClick={onClose} className={styles.closeButton}>
            &times;
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(taskData);
        }}>
          {/* Поля формы */}
          <Calendar
            selectedDate={taskData.date}
            onDateChange={(date) => setTaskData({...taskData, date})}
          />

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              Создать задачу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
