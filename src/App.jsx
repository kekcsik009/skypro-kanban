import { useState } from 'react';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import PopNewCard from '@/components/popups/PopNewCard/PopNewCard';
import PopBrowse from '@/components/popups/PopBrowse/PopBrowse';
import PopUser from '@/components/popups/PopUser/PopUser';
import initialData from "./data/initialData";
import '@/App.css';

function App() {
  // Общее состояние приложения
  const [darkTheme, setDarkTheme] = useState(false);
  const [cards, setCards] = useState(initialData.cards);
  const [activePopup, setActivePopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userData] = useState({
    name: 'Ivan Ivanov',
    email: 'ivan.ivanov@gmail.com'
  });

  // Обработчики для Header
  const handleCreateTask = () => {
    setActivePopup('new');
  };

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme', !darkTheme);
  };

  // Обработчики для карточек
  const handleSaveNewCard = (newCard) => {
    const cardWithId = { 
      ...newCard, 
      id: Date.now().toString(),
      status: 'Без статуса'
    };
    setCards([...cards, cardWithId]);
    setActivePopup(null);
  };

  const handleUpdateCard = (updatedCard) => {
    setCards(cards.map(card => 
      card.id === updatedCard.id ? updatedCard : card
    ));
    setActivePopup(null);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
    setActivePopup(null);
  };
  if (!cards.length) {
    return <div style={{ padding: '20px' }}>Данные не загружены...</div>;
  }
  
  return (
    <div className={`app ${darkTheme ? 'dark-theme' : ''}`}>
      <Header 
        userName={userData.name}
        onCreateTask={handleCreateTask}
      />
      
      <Main 
        cards={cards}
        onCardSelect={(card) => {
          setSelectedCard(card);
          setActivePopup('browse');
        }}
      />

      {/* Управление модальными окнами */}
      {activePopup === 'new' && (
        <PopNewCard 
          onClose={() => setActivePopup(null)}
          onSubmit={handleSaveNewCard}
        />
      )}

      {activePopup === 'browse' && selectedCard && (
        <PopBrowse 
          card={selectedCard}
          onClose={() => setActivePopup(null)}
          onSave={handleUpdateCard}
          onDelete={() => handleDeleteCard(selectedCard.id)}
        />
      )}

      {activePopup === 'user' && (
        <PopUser
          user={userData}
          darkTheme={darkTheme}
          onThemeToggle={handleThemeToggle}
          onLogout={() => {
            // Логика выхода
            setActivePopup(null);
          }}
          onClose={() => setActivePopup(null)}
        />
      )}
      <div style={{
  position: 'fixed',
  bottom: 0,
  left: 0,
  background: 'red',
  color: 'white',
  padding: '10px',
  zIndex: 9999
}}>
  DEBUG: Карточек - {cards.length} | Тема - {darkTheme ? 'Тёмная' : 'Светлая'}
</div>

    </div>
  );
}


export default App;
  

