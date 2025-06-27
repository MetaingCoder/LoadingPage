fetch('https://loading.earth-online.space')
    .then(response => response.text())
    .then(html => {
        const loader = document.createElement('div');
        loader.innerHTML = html;
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
        `;
        document.body.appendChild(loader);

        // 直接使用 setTimeout，不依赖 load 事件
        setTimeout(() => {
            loader.remove();
        }, 2000);
    })
    .catch(err => console.error('加载动画失败:', err));