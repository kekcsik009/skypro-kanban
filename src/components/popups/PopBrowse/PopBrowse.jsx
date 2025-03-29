import { useState, useEffect } from 'react';
import Calendar from "../../Calendar/Calendar";
import styles from './PopBrowse.module.css';


export default function PopBrowse({ card, onClose, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState({ ...card });

  useEffect(() => {
    setEditedCard({ ...card });
    setIsEditing(false);
  }, [card]);

  const handleFieldChange = (field, value) => {
    setEditedCard(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(editedCard);
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.popupHeader}>
          <h3>{isEditing ? 'Редактирование задачи' : card.title}</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>

        <div className={styles.popupContent}>
          {!isEditing ? (
            // Режим просмотра
            <>
              <div className={styles.categoryBadge}>
                <span className={styles[editedCard.theme]}>{editedCard.theme}</span>
              </div>
              
              <div className={styles.description}>
                {editedCard.description}
              </div>

              <div className={styles.dates}>
                <Calendar 
                  selectedDate={new Date(editedCard.date)} 
                  readOnly 
                />
              </div>
            </>
          ) : (
            // Режим редактирования
            <>
              <div className={styles.formGroup}>
                <label>Название</label>
                <input
                  value={editedCard.title}
                  onChange={(e) => handleFieldChange('title', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Описание</label>
                <textarea
                  value={editedCard.description}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                />
              </div>

              <Calendar
                selectedDate={new Date(editedCard.date)}
                onDateChange={(date) => handleFieldChange('date', date)}
              />
            </>
          )}

          <div className={styles.buttonGroup}>
            {isEditing ? (
              <>
                <button 
                  type="button" 
                  className={styles.saveBtn}
                  onClick={handleSave}
                >
                  Сохранить
                </button>
                <button 
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setIsEditing(false)}
                >
                  Отменить
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.editBtn}
                  onClick={() => setIsEditing(true)}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => {
                    // Логика удаления
                    onClose();
                  }}
                >
                  Удалить
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
