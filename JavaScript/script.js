const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
});