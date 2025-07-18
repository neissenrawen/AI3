const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load theme from localStorage if available
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Save preference
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
