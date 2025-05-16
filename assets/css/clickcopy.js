const ip = document.querySelector('.animated-ip');

ip.addEventListener('mouseenter', () => {
  ip.style.backgroundColor = '#222';
  ip.style.color = '#00e5ff';
  ip.style.padding = '0px 10px';
  ip.style.borderRadius = '10px';
  ip.style.transition = 'all 0.5s ease';
  ip.style.boxShadow = '0 0 100px #FFFFFF';

  ip.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(-5px)' },
    { transform: 'translateX(5px)' },
    { transform: 'translateX(0)' }
  ], {
    duration: 300,
    iterations: 1
  });
});

ip.addEventListener('mouseleave', () => {
  ip.style.backgroundColor = '';
  ip.style.color = '';
  ip.style.padding = '';
  ip.style.borderRadius = '';
  ip.style.boxShadow = '';
});

window.clickcopy = function(el) {
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = document.createElement('div');
    tooltip.innerText = 'Đã sao chép IP!';
    Object.assign(tooltip.style, {
      position: 'fixed',
      bottom: '60px',
      right: '140px',
      background: 'linear-gradient(135deg, #000000, #000000)',
      color: '#fff',
      padding: '24px 32px',
      borderRadius: '12px',
      fontSize: '22px',
      fontWeight: '600',
      opacity: '0',
      transform: 'scale(0.8)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      pointerEvents: 'none',
      zIndex: 9999,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 1), 0 0 20px rgba(255, 255, 255, 1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    });

    const progressBar = document.createElement('div');
    Object.assign(progressBar.style, {
      width: '100%',
      height: '4px',
      background: '#fff',
      borderRadius: '2px',
      overflow: 'hidden'
    });

    const progress = document.createElement('div');
    Object.assign(progress.style, {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, #00e5ff, #007bff)',
      animation: 'progress 5s linear forwards'
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes progress {
        from { width: 100%; }
        to { width: 0; }
      }
    `;
    document.head.appendChild(style);

    progressBar.appendChild(progress);
    tooltip.appendChild(progressBar);
    document.body.appendChild(tooltip);

    requestAnimationFrame(() => {
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'scale(2)';
    });

    setTimeout(() => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'scale(0.8)';
      setTimeout(() => {
        tooltip.remove();
        style.remove();
      }, 300);
    }, 5000);
  }).catch(err => {
    console.error("Lỗi khi sao chép: ", err);
  });
};