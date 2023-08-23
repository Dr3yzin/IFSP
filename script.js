function pare() {
  const background = document.querySelector('body');
  const estadoAnimacao = background.style.animationPlayState;
  
  if (estadoAnimacao === 'paused') {
    background.style.animationPlayState = 'running';
  } 
  else {
    background.style.animationPlayState = 'paused';
  }
}