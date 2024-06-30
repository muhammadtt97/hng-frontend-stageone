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

    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
});
