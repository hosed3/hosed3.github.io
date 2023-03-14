function toggleContent() {
  // znajdź element, który ma być rozwijany lub ukrywany
  var content = document.querySelector('.content');
  
  // zmień styl wyświetlania elementu na podstawie jego aktualnego stanu
  if (content.style.display === 'none') {
    content.style.display = 'block';
    document.querySelector('button').innerHTML = 'Ukryj treść';
  } else {
    content.style.display = 'none';
    document.querySelector('button').innerHTML = 'Pokaż treść';
  }
}