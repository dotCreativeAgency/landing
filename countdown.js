/**
 * Countdown Timer for MidClass Landing Page
 * Pure JavaScript (no dependencies)
 */

(function() {
    'use strict';

    // Set target launch date: 5 Novembre 2025
    const launchDate = new Date('2025-11-08T23:59:59');

    // Get DOM elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Countdown interval reference
    let countdownInterval = null;

    /**
     * Pad number with leading zero if needed
     * @param {number} num - Number to pad
     * @returns {string} - Padded number string
     */
    function padNumber(num) {
        return num < 10 ? '0' + num : num.toString();
    }

    /**
     * Calculate time remaining until launch date
     * @returns {object} - Object with days, hours, minutes, seconds
     */
    function getTimeRemaining() {
        const now = new Date().getTime();
        const target = launchDate.getTime();
        const difference = target - now;

        // If countdown is finished
        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                finished: true
            };
        }

        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            finished: false
        };
    }

    /**
     * Update countdown display
     */
    function updateCountdown() {
        const timeRemaining = getTimeRemaining();

        // Update DOM elements with padded values
        if (daysElement) daysElement.textContent = padNumber(timeRemaining.days);
        if (hoursElement) hoursElement.textContent = padNumber(timeRemaining.hours);
        if (minutesElement) minutesElement.textContent = padNumber(timeRemaining.minutes);
        if (secondsElement) secondsElement.textContent = padNumber(timeRemaining.seconds);

        // If countdown finished, show a message
        if (timeRemaining.finished) {
            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div style="
                        background: linear-gradient(135deg, #32D74B 0%, #00A8E8 100%);
                        color: white;
                        padding: 24px;
                        border-radius: 12px;
                        font-size: 1.5rem;
                        font-weight: 700;
                        text-align: center;
                    ">
                        🎉 Siamo Live! 🎉
                    </div>
                `;
            }
            clearInterval(countdownInterval);
        }
    }

    /**
     * Initialize countdown
     */
    function initCountdown() {
        // Check if countdown elements exist
        if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
            console.error('Countdown elements not found in DOM');
            return;
        }

        // Update immediately
        updateCountdown();

        // Update every second
        countdownInterval = setInterval(updateCountdown, 1000);

        // Log launch date for debugging (can be removed in production)
        console.log('Countdown initialized. Launch date:', launchDate.toLocaleString('it-IT'));
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCountdown);
    } else {
        initCountdown();
    }

})();
