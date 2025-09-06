// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.courses-carousel');
//     const prevBtn = document.querySelector('.courses-prev');
//     const nextBtn = document.querySelector('.courses-next');
//     const cards = document.querySelectorAll('.courses-card');
//     const cardWidth = cards[0].offsetWidth + 40; // width + gap
    
//     let currentPosition = 0;
//     let isDragging = false;
//     let startX, scrollLeft, velocity, lastX, animationFrame;
//     const maxPosition = (cards.length - 3) * cardWidth;
//     const friction = 0.95; 
//     const minVelocity = 0.5; 

//     prevBtn.addEventListener('click', function() {
//         currentPosition += cardWidth;
//         if (currentPosition > 0) currentPosition = 0;
//         smoothScrollTo(-currentPosition);
//     });
    
//     nextBtn.addEventListener('click', function() {
//         currentPosition -= cardWidth;
//         if (currentPosition < -maxPosition) currentPosition = -maxPosition;
//         smoothScrollTo(-currentPosition);
//     });

//     carousel.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         startX = e.pageX - carousel.offsetLeft;
//         scrollLeft = carousel.scrollLeft;
//         lastX = startX;
//         velocity = 0;
//         carousel.style.cursor = 'grabbing';
//         carousel.style.scrollBehavior = 'auto';
        
//         cancelAnimationFrame(animationFrame);
//     });

//     carousel.addEventListener('mousemove', (e) => {
//         if (!isDragging) return;
//         e.preventDefault();
        
//         const x = e.pageX - carousel.offsetLeft;
//         const walk = (x - startX);
        
//         const now = performance.now();
//         const deltaX = x - lastX;
//         lastX = x;
//         velocity = deltaX * 1.5;
        
//         carousel.scrollLeft = scrollLeft - walk;
//     });

//     carousel.addEventListener('mouseup', () => {
//         isDragging = false;
//         carousel.style.cursor = 'grab';
        
//         if (Math.abs(velocity) > minVelocity) {
//             animateInertia();
//         } else {
//             carousel.style.scrollBehavior = 'smooth';
//             currentPosition = -carousel.scrollLeft;
//             updateButtons();
//         }
//     });

//     carousel.addEventListener('mouseleave', () => {
//         if (isDragging) {
//             isDragging = false;
//             carousel.style.cursor = 'grab';
            
//             if (Math.abs(velocity) > minVelocity) {
//                 animateInertia();
//             } else {
//                 carousel.style.scrollBehavior = 'smooth';
//                 currentPosition = -carousel.scrollLeft;
//                 updateButtons();
//             }
//         }
//     });

//     function animateInertia() {
//         velocity *= friction;
        
//         if (Math.abs(velocity) > minVelocity) {
//             carousel.scrollLeft -= velocity;
//             animationFrame = requestAnimationFrame(animateInertia);
//         } else {
//             carousel.style.scrollBehavior = 'smooth';
//             currentPosition = -carousel.scrollLeft;
//             carousel.scrollLeft = -currentPosition;
//             updateButtons();
//         }
//     }

//     function smoothScrollTo(position) {
//         carousel.style.scrollBehavior = 'smooth';
//         carousel.scrollLeft = position;
//         currentPosition = -position;
//         updateButtons();
//     }

//     function updateButtons() {
//         prevBtn.disabled = currentPosition === 0;
//         nextBtn.disabled = currentPosition <= -maxPosition;
//     }

//     carousel.addEventListener('scroll', function() {
//         if (!isDragging) {
//             currentPosition = -carousel.scrollLeft;
//             updateButtons();
//         }
//     });

//     updateButtons();
// });


document.addEventListener('DOMContentLoaded', function() {
    const headerNumber = document.querySelector('.header-number');
    const copyNotification = document.getElementById('copyNotification');
    
    headerNumber.style.cursor = 'pointer';
    headerNumber.title = 'Кликните, чтобы скопировать номер';
    
    headerNumber.addEventListener('click', function() {
        const phoneNumber = this.textContent.replace(/[^\d+]/g, '');

        navigator.clipboard.writeText(phoneNumber).then(function() {
            copyNotification.classList.add('show');
            
            setTimeout(function() {
                copyNotification.classList.remove('show');
            }, 2000);
        }).catch(function(err) {
            console.error('Не удалось скопировать номер: ', err);
            const textArea = document.createElement('textarea');
            textArea.value = phoneNumber;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copyNotification.textContent = 'Номер скопирован!';
                copyNotification.classList.add('show');
                setTimeout(function() {
                    copyNotification.classList.remove('show');
                }, 2000);
            } catch (err) {
                copyNotification.textContent = 'Не удалось скопировать';
                copyNotification.classList.add('show');
                setTimeout(function() {
                    copyNotification.classList.remove('show');
                }, 2000);
            }
            document.body.removeChild(textArea);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const questionItems = document.querySelectorAll('.questions-item');
    
    questionItems.forEach(item => {
        const btn = item.querySelector('.questions-item-btn');
        
btn.addEventListener('click', function() {
    item.classList.toggle('active');
});
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  document.querySelector('.burger-btn').addEventListener('click', function() {
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('active');
    document.querySelector('.burger-btn').classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
});

