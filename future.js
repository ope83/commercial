/**
 * Future.js - A simple JavaScript module with enhanced functionality
 */

(function() {
    'use strict';

    /**
     * Main application entry point
     */
    function init() {
        greet('World');
    }

    /**
     * Greets the specified name with a console message
     * @param {string} name - The name to greet
     */
    function greet(name) {
        if (!name || typeof name !== 'string') {
            console.error('Invalid name provided');
            return;
        }
        console.log(`Hello, ${name}!`);
    }

    // Initialize the application
    init();

    // Export functions if needed (for module usage)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            greet
        };
    }
})();