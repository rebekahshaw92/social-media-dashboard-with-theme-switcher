let darkToggle = document.querySelector('#flexSwitchCheckChecked');
let card = document.querySelectorAll('.card');
let header = document.querySelector('.backHeader');
let text = document.querySelector('.overTitle');

darkToggle.addEventListener('change', () => {
 document.body.classList.toggle('dark');
 text.classList.toggle('darkOverviewText');
 header.classList.toggle('darkheader');
  card.forEach(card => {
    if(document.body.classList.contains('dark')) {
    card.classList.add('cardDark');
  } else {
    card.classList.remove('cardDark');
}
});
  
});