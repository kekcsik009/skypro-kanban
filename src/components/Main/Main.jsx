// 
<div style={{ 
  display: 'flex', 
  gap: '20px',
  padding: '20px'
}}>
  {statuses.map(status => {
    const filteredCards = cards.filter(card => card.status === status);
    console.log(`Status: ${status}`, filteredCards); // Проверьте данные в консоли
    
    return (
      <Column
        key={status}
        title={`${status} (${filteredCards.length})`}
        cards={filteredCards}
        onCardClick={onCardSelect}
      />
    );
  })}
</div>
