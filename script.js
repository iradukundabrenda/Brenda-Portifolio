// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Show video placeholder if video file is missing
document.querySelectorAll('.project-video').forEach(wrapper => {
  const video = wrapper.querySelector('video');
  const placeholder = wrapper.querySelector('.video-placeholder');
  if (video && placeholder) {
    video.addEventListener('error', () => {
      video.style.display = 'none';
      placeholder.style.display = 'flex';
    });
    // Check if source exists
    const source = video.querySelector('source');
    if (source) {
      fetch(source.src).then(r => {
        if (!r.ok) {
          video.style.display = 'none';
          placeholder.style.display = 'flex';
        }
      }).catch(() => {
        video.style.display = 'none';
        placeholder.style.display = 'flex';
      });
    }
  }
});

console.log("Portfolio loaded — Brenda Iradukunda");