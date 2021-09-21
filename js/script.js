let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
let onClick = document.getElementsByClassName('click');
let modal = document.getElementsByClassName('modal');
let modalOverlay = document.getElementsByClassName('modal-overlay');
let closeModal = document.getElementsByClassName('close-modal');
  for(let i = 0; i < onClick.length; i++) {
      onClick[i].addEventListener('click', function() {
        modal[0].classList.add('open');
        modalOverlay[0].classList.add('blur');
      }
    )
    
    closeModal[0].addEventListener('click', function() {
      modal[0].classList.remove('open');
      modalOverlay[0].classList.remove('blur');
    }
    )
  }
  function openModal() {
    let feedback = document.getElementById('feedback-modal');
    let modalOverlayFeedback = document.getElementsByClassName('feedback-modal-overlay');
    feedback.classList.add('feed');
    modalOverlayFeedback[0].classList.add('feedOver');
  }
  function closeFeed() {
    let feedback = document.getElementById('feedback-modal');
    let modalOverlayFeedback = document.getElementsByClassName('feedback-modal-overlay');
    feedback.classList.remove('feed');
    modalOverlayFeedback[0].classList.remove('feedOver');
  }
  const items = document.querySelectorAll(".accordion button");

  var item = document.getElementsByClassName('item');

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(el) {
      
      el.currentTarget.classList.toggle('item--open');
      
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== el.currentTarget && item[i].className === "item item--open") {
          item[i].classList.remove('item--open');
        }
      }
    });
  };
  
