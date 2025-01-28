// Add a glowing border to cards on mouseover
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.border = '2px solid #66a6ff';
  });
  card.addEventListener('mouseout', () => {
    card.style.border = 'none';
  });
});
