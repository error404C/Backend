// Helper functions
function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="${type}">${message}</div>`;
    }
}

// Keep this for any shared functionality
console.log('WhatsApp Bot Frontend Loaded');
