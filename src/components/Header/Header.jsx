import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ onCreateTask }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            className={styles.logo}
          />

          <div className={styles.actions}>
            <button 
              className={styles.createButton}
              onClick={onCreateTask}
            >
              Создать задачу
            </button>

            <div className={styles.userSection}>
              <button 
                className={styles.userButton}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                Ivan Ivanov
              </button>

              {isUserMenuOpen && (
                <div className={styles.userMenu}>
                  {/* Меню пользователя */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
