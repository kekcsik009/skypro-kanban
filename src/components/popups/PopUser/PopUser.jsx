import styles from './PopUser.module.css';

export default function PopUser({ user, onLogout, onThemeChange }) {
  return (
    <div className={styles.userMenu}>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{user.name}</p>
        <p className={styles.userEmail}>{user.email}</p>
      </div>

      <div className={styles.themeToggle}>
        <label>
          Темная тема
          <input 
            type="checkbox" 
            onChange={onThemeChange}
          />
        </label>
      </div>

      <button 
        onClick={onLogout}
        className={styles.logoutButton}
      >
        Выйти
      </button>
    </div>
  );
}
