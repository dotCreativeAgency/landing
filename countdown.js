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

        // If countdown finished (date in the past), show "Coming Soon"
        if (timeRemaining.finished) {
            const countdownContainer = document.querySelector('.countdown-container');
            if (countdownContainer) {
                countdownContainer.innerHTML = `
                    <div style="
                        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                        color: white;
                        padding: 40px 32px;
                        border-radius: 20px;
                        text-align: center;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    ">
                        <div style="font-size: 3.5rem; margin-bottom: 16px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">⏳</div>
                        <div style="
                            font-size: 2.2rem; 
                            font-weight: 800; 
                            margin-bottom: 12px;
                            letter-spacing: 1px;
                            background: linear-gradient(135deg, #FFD23F 0%, #FF6B35 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                        ">
                            IN ARRIVO
                        </div>
                        <div style="
                            font-size: 1.1rem; 
                            opacity: 0.9;
                            line-height: 1.6;
                            max-width: 320px;
                            margin: 0 auto;
                            font-weight: 400;
                        ">
                            Prodotti esclusivi a prezzi che non troverai altrove.<br>Solo per te.
                        </div>
                        <div style="
                            margin-top: 24px;
                            padding-top: 24px;
                            border-top: 1px solid rgba(255, 255, 255, 0.15);
                        ">
                            <div style="
                                display: inline-flex;
                                align-items: center;
                                gap: 8px;
                                font-size: 0.9rem;
                                opacity: 0.8;
                            ">
                                <span style="font-size: 1.2rem;">🔔</span>
                                <span>Ti avviseremo al lancio</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            clearInterval(countdownInterval);
            return;
        }

        // Update DOM elements with padded values (countdown active)
        if (daysElement) daysElement.textContent = padNumber(timeRemaining.days);
        if (hoursElement) hoursElement.textContent = padNumber(timeRemaining.hours);
        if (minutesElement) minutesElement.textContent = padNumber(timeRemaining.minutes);
        if (secondsElement) secondsElement.textContent = padNumber(timeRemaining.seconds);
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
