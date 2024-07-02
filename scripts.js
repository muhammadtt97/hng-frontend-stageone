document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const currentTimeElement = document.getElementById('current-time');
        currentTimeElement.textContent = utcTime;
    };

    const updateDay = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const now = new Date();
        const currentDay = days[now.getUTCDay()];
        const currentDayElement = document.getElementById('current-day');
        currentDayElement.textContent = currentDay;
    };

    const updateImageDimensions = () => {
        const profileImage = document.querySelector('[data-testid="slackProfilePicture"]');
        if (profileImage) {
            if (profileImage.complete) {
                setImageDimensions();
            } else {
                profileImage.onload = setImageDimensions;
            }
        }

        function setImageDimensions() {
            const naturalWidth = profileImage.naturalWidth;
            const naturalHeight = profileImage.naturalHeight;
            profileImage.setAttribute('width', naturalWidth);
            profileImage.setAttribute('height', naturalHeight);
            console.log(`Natural dimensions: ${naturalWidth}x${naturalHeight}`);
        }
    };

    updateTime();
    updateDay();
    updateImageDimensions();
    setInterval(updateTime, 1000);
});
