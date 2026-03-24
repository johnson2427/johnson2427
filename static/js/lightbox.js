document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    var item = e.target.closest('.showcase-item');
    if (!item) return;

    e.preventDefault();
    e.stopPropagation();

    var img = item.querySelector('img');
    var caption = item.querySelector('.showcase-caption');

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    var newImg = document.createElement('img');
    newImg.src = img.src;
    newImg.alt = img.alt;
    overlay.appendChild(newImg);

    if (caption) {
      var cap = document.createElement('div');
      cap.className = 'lightbox-caption';
      cap.textContent = caption.textContent;
      overlay.appendChild(cap);
    }

    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
  });
});
