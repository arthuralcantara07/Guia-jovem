const startBtn = document.getElementById('startBtn');

if (startBtn) {
  startBtn.addEventListener('click', () => {
    startBtn.classList.add('blink');
    startBtn.disabled = true;
    setTimeout(() => {
      window.location.href = 'trilha.html';
    }, 650);
  });
}