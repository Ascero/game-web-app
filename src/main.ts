import './style.css'

window.addEventListener('load', () => {
  const canvas = document.getElementById('game-web-app-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  canvas.width = 1500;
  canvas.height = 1500;
})