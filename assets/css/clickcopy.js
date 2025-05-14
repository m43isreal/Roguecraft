  const ip = document.querySelector('.animated-ip');

  // Hiệu ứng hover nổi bật + rung nhẹ
  ip.addEventListener('mouseenter', () => {
    ip.style.backgroundColor = '#222';
    ip.style.color = '#00e5ff';
    ip.style.padding = '0px 10px';
    ip.style.borderRadius = '10px';
    ip.style.transition = 'all 0.5s ease';
    ip.style.boxShadow = '0 0 100px #FFFFFF';

    // Rung nhẹ (shake animation)
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

  // Hàm copy + tooltip
  window.clickcopy = function(el) {
    const text = el.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = document.createElement('div');
      tooltip.innerText = 'Đã sao chép IP!';
      Object.assign(tooltip.style, {
        position: 'absolute',
        top: (el.offsetTop - 30) + 'px',
        left: (el.offsetLeft + el.offsetWidth - 100) + 'px',
        background: '#333',
        color: '#fff',
        padding: '14px 16px',
        borderRadius: '4px',
        fontSize: '15px',
        opacity: '0',
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        zIndex: 9999
      });

      document.body.appendChild(tooltip);
      requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
      });

      setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
          tooltip.remove();
        }, 300);
      }, 1500);
    }).catch(err => {
      console.error("Lỗi khi sao chép: ", err);
    });
  };