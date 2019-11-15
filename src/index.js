const controls = document.querySelectorAll('.controls input');

controls.forEach(control => {
  control.addEventListener('change', handleInputChange);
  control.addEventListener('mousemove', handleInputChange);
});

function handleInputChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}