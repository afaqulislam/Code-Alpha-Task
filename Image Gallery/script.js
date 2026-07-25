document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // ELEMENTS
    // ========================================
    const galleryImages = document.querySelectorAll('.gallery-img');
    const thumbs = document.querySelectorAll('.thumb');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageContainer = document.getElementById('imageContainer');
    const counterCurrent = document.querySelector('.counter-current');
    const counterTotal = document.querySelector('.counter-total');
    const progressFill = document.getElementById('progressFill');
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    const zoomBtn = document.getElementById('zoomBtn');
    const autoplayBtn = document.getElementById('autoplayBtn');
    const themeToggle = document.getElementById('themeToggle');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    // ========================================
    // STATE
    // ========================================
    let currentIndex = 0;
    const totalImages = galleryImages.length;
    let likedImages = new Set();
    let isAutoPlaying = false;
    let autoPlayInterval = null;
    let lightboxOpen = false;

    // ========================================
    // CORE GALLERY FUNCTIONS
    // ========================================
    function updateGallery(direction = 'none') {
        // Update images
        galleryImages.forEach((img, i) => {
            img.classList.remove('active', 'animate-ken');
            if (i === currentIndex) {
                img.classList.add('active');
                // Trigger Ken Burns
                requestAnimationFrame(() => {
                    img.classList.add('animate-ken');
                });
            }
        });

        // Update thumbnails
        thumbs.forEach((t, i) => {
            t.classList.toggle('active', i === currentIndex);
        });

        // Scroll active thumb into view
        const activeThumb = thumbs[currentIndex];
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        // Update counter
        counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
        counterCurrent.classList.remove('bump');
        void counterCurrent.offsetWidth;
        counterCurrent.classList.add('bump');

        // Update total
        counterTotal.textContent = String(totalImages).padStart(2, '0');

        // Update progress
        const progress = ((currentIndex + 1) / totalImages) * 100;
        progressFill.style.width = progress + '%';

        // Update buttons
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalImages - 1;

        // Update like
        updateLikeUI();

        // Update lightbox if open
        if (lightboxOpen) {
            updateLightboxImage();
        }
    }

    function goToImage(index) {
        if (index < 0 || index >= totalImages || index === currentIndex) return;
        currentIndex = index;
        updateGallery();
    }

    function nextImage() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateGallery('next');
        } else if (isAutoPlaying) {
            currentIndex = 0;
            updateGallery('next');
        }
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery('prev');
        }
    }

    // ========================================
    // LIKE SYSTEM
    // ========================================
    function updateLikeUI() {
        const isLiked = likedImages.has(currentIndex);
        likeBtn.classList.toggle('liked', isLiked);
        likeCount.textContent = likedImages.size;
    }

    function toggleLike() {
        if (likedImages.has(currentIndex)) {
            likedImages.delete(currentIndex);
        } else {
            likedImages.add(currentIndex);
            spawnHeartParticles();
        }
        updateLikeUI();
    }

    function spawnHeartParticles() {
        const container = document.createElement('div');
        container.className = 'heart-particles';
        imageContainer.appendChild(container);

        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('span');
            particle.className = 'heart-particle';
            particle.textContent = '❤';
            particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
            particle.style.animationDelay = `${i * 0.08}s`;
            container.appendChild(particle);
        }

        setTimeout(() => container.remove(), 1200);
    }

    // ========================================
    // AUTO PLAY
    // ========================================
    function toggleAutoPlay() {
        isAutoPlaying = !isAutoPlaying;
        autoplayBtn.classList.toggle('active', isAutoPlaying);

        if (isAutoPlaying) {
            autoplayBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="6" y="4" width="4" height="16"/>
                    <rect x="14" y="4" width="4" height="16"/>
                </svg>`;
            autoPlayInterval = setInterval(nextImage, 3000);
        } else {
            autoplayBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>`;
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function stopAutoPlay() {
        if (isAutoPlaying) toggleAutoPlay();
    }

    // ========================================
    // DARK MODE
    // ========================================
    function initTheme() {
        const saved = localStorage.getItem('lumina-theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('lumina-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('lumina-theme', 'dark');
        }
    }

    // ========================================
    // FULLSCREEN
    // ========================================
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen();
        }
    }

    // ========================================
    // LIGHTBOX
    // ========================================
    function openLightbox() {
        lightboxOpen = true;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        updateLightboxImage();
        stopAutoPlay();
    }

    function closeLightbox() {
        lightboxOpen = false;
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        const src = galleryImages[currentIndex].src;
        const alt = galleryImages[currentIndex].alt;
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightboxCounter.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    function lightboxPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    function lightboxNextImage() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateGallery();
        }
    }

    // ========================================
    // TOUCH / SWIPE SUPPORT
    // ========================================
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50;

    imageContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    imageContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    }, { passive: true });

    // Lightbox swipe
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (diff > 0) lightboxNextImage();
            else lightboxPrevImage();
        }
    }, { passive: true });

    // ========================================
    // EVENT LISTENERS
    // ========================================

    // Navigation
    prevBtn.addEventListener('click', () => { stopAutoPlay(); prevImage(); });
    nextBtn.addEventListener('click', () => { stopAutoPlay(); nextImage(); });

    // Thumbnails
    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', () => {
            stopAutoPlay();
            goToImage(parseInt(thumb.dataset.index));
        });
    });

    // Like
    likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLike();
    });

    // Zoom / Open lightbox
    imageContainer.addEventListener('click', (e) => {
        if (e.target.closest('.like-btn') || e.target.closest('.overlay-btn')) return;
        openLightbox();
    });

    zoomBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox();
    });

    // Auto play
    autoplayBtn.addEventListener('click', toggleAutoPlay);

    // Theme
    themeToggle.addEventListener('click', toggleTheme);

    // Fullscreen
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', lightboxPrevImage);
    lightboxNext.addEventListener('click', lightboxNextImage);

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', (e) => {
        if (lightboxOpen) {
            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    lightboxPrevImage();
                    break;
                case 'ArrowRight':
                    lightboxNextImage();
                    break;
            }
            return;
        }

        switch (e.key) {
            case 'ArrowLeft':
                stopAutoPlay();
                prevImage();
                break;
            case 'ArrowRight':
                stopAutoPlay();
                nextImage();
                break;
            case 'f':
            case 'F':
                openLightbox();
                break;
            case ' ':
                e.preventDefault();
                toggleAutoPlay();
                break;
            case 'l':
            case 'L':
                toggleLike();
                break;
        }
    });

    // ========================================
    // MOUSE PARALLAX on image container
    // ========================================
    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const activeImg = galleryImages[currentIndex];
        if (activeImg) {
            activeImg.style.transform = `scale(1.02) translate(${x * -8}px, ${y * -8}px)`;
        }
    });

    imageContainer.addEventListener('mouseleave', () => {
        const activeImg = galleryImages[currentIndex];
        if (activeImg) {
            activeImg.style.transform = '';
        }
    });

    // ========================================
    // INIT
    // ========================================
    initTheme();
    updateGallery();
});
