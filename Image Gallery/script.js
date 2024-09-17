document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-images img');
    let currentIndex = 0;

    function updateGallery() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });

        document.getElementById('prevBtn').disabled = currentIndex === 0;
        document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
    }

    function showNextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery();
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPrevImage);

    // Initialize the gallery
    updateGallery();
});
