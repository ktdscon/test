// 스크롤 진행률 표시
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';
});

// 섹션으로 부드럽게 스크롤
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// 스크롤 시 페이드인 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 모든 fade-in 요소 관찰
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 타이핑 효과
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 페이지 로드 시 타이핑 효과 시작
window.addEventListener('load', function() {
    const titleElement = document.querySelector('.name');
    const originalText = titleElement.textContent;
    typeWriter(titleElement, originalText, 150);
});

// 스킬 태그 호버 효과
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// 스트렝스 아이템 클릭 효과
document.querySelectorAll('.strength-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
});

// 배경 그라데이션 애니메이션 (선택사항)
function animateBackground() {
    const body = document.body;
    let hue = 0;
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 60%) 0%, hsl(${(hue + 60) % 360}, 70%, 60%) 100%)`;
    }, 100);
}

// 배경 애니메이션 시작 (선택사항 - 주석 해제하면 활성화)
// animateBackground();

// 네비게이션 버튼 활성화 효과
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        // 모든 버튼에서 active 클래스 제거
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // 클릭된 버튼에 active 클래스 추가
        this.classList.add('active');
    });
});

// 스크롤 시 현재 섹션에 따른 네비게이션 하이라이트
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('onclick').includes(current)) {
            button.classList.add('active');
        }
    });
});

// 스킬 태그 클릭 시 추가 효과
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        // 클릭 시 파티클 효과 (간단한 버전)
        this.style.transform = 'scale(1.3) rotate(10deg)';
        this.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.8)';
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        }, 300);
    });
});

// 섹션별 스크롤 애니메이션 개선
const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        }
    });
}, {
    threshold: 0.1
});

// 모든 섹션에 애니메이션 관찰자 적용
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// CSS 애니메이션을 위한 동적 스타일 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-button.active {
        background: #667eea;
        color: white;
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);
