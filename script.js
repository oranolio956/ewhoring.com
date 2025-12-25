document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelector('.chat-messages');
    const input = document.querySelector('.chat-input input');
    const freakout = document.getElementById('scammer-freakout');

    // Hide the freakout overlay initially
    freakout.style.display = 'none';

    // Clear existing messages
    chatMessages.innerHTML = '';

    // Define initial messages to set the scene
    const initialMessages = [
        { user: 'ShelfyXD', text: 'Hey there, pathetic loser! Ready to get rich quick?' },
        { user: 'Anonymous', text: 'Uh, sure? What\'s the scam this time?' },
        { user: 'ShelfyXD', text: 'It\'s not a scam, it\'s an "opportunity"! Send me $1000 and I\'ll triple it overnight!' }
    ];

    // Add initial messages without animation
    initialMessages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message';
        msgDiv.innerHTML = `<span class="username">${msg.user}:</span> ${msg.text}`;
        chatMessages.appendChild(msgDiv);
    });

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add event listener for user input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const message = input.value.trim();
            if (message.toLowerCase() === 'buy') {
                // Trigger the SCAMMER overlay
                freakout.style.display = 'flex';
                // Add flashing effect
                let flash = true;
                setInterval(() => {
                    freakout.style.backgroundColor = flash ? 'rgba(255, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.9)';
                    freakout.style.color = flash ? '#ffffff' : '#ff0000';
                    flash = !flash;
                }, 150); // Flash every 150ms
            } else {
                // Add user message
                const msgDiv = document.createElement('div');
                msgDiv.className = 'message';
                msgDiv.innerHTML = `<span class="username">You:</span> ${message}`;
                chatMessages.appendChild(msgDiv);
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            input.value = '';
        }
    });
});