// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    
    surpriseBtn.addEventListener('click', function() {
        // 创建彩色纸屑效果
        createConfetti();
        
        // 显示消息
        const message = document.createElement('div');
        message.textContent = '🎉 恭喜你发现了彩蛋！';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            z-index: 1000;
            font-size: 1.5rem;
        `;
        
        document.body.appendChild(message);
        
        // 3秒后移除消息
        setTimeout(() => {
            message.remove();
        }, 3000);
    });
    
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9f1c', '#6a0572'];
        const container = document.body;
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = '❄️';
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                font-size: ${Math.random() * 20 + 10}px;
                left: ${Math.random() * 100}%;
                color: ${colors[Math.floor(Math.random() * colors.length)]};
                z-index: 999;
                pointer-events: none;
            `;
            
            container.appendChild(confetti);
            
            // 动画效果
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
            });
            
            // 动画结束后移除元素
            animation.onfinish = () => confetti.remove();
        }
    }
});
