document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelector('.chat-messages');
    const freakout = document.getElementById('scammer-freakout');

    // Hide the freakout overlay initially
    freakout.style.display = 'none';

    // Clear existing messages
    chatMessages.innerHTML = '';

    // Define the mocking chat messages
    const messages = [
        { user: 'ShelfyXD', text: 'Hey there, pathetic loser! Ready to get rich quick?' },
        { user: 'Anonymous', text: 'Uh, sure? What\'s the scam this time?' },
        { user: 'ShelfyXD', text: 'It\'s not a scam, it\'s an "opportunity"! Send me $1000 and I\'ll triple it overnight!' },
        { user: 'Anonymous', text: 'Triple it? With what magic?' },
        { user: 'ShelfyXD', text: 'My secret Nigerian prince algorithm! Trust me, I\'m a "professional"!' },
        { user: 'Anonymous', text: 'You sound like every other idiot on Discord. Prove it.' },
        { user: 'ShelfyXD', text: 'Fine, here\'s a fake screenshot! Now send the money, fool!' },
        { user: 'Anonymous', text: 'LOL, you\'re such a clown. I\'m reporting you.' },
        { user: 'ShelfyXD', text: 'Noooo! Don\'t do that! I\'m not a scammer!' }
    ];

    // Function to add a message with animation
    messages.forEach((msg, index) => {
        setTimeout(() => {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'message';
            msgDiv.innerHTML = `<span class="username">${msg.user}:</span> ${msg.text}`;
            chatMessages.appendChild(msgDiv);
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, index * 1500); // 1.5 seconds between messages
    });

    // After all messages, trigger the freakout
    setTimeout(() => {
        freakout.style.display = 'flex';
        // Add flashing effect
        let flash = true;
        setInterval(() => {
            freakout.style.backgroundColor = flash ? 'rgba(255, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.9)';
            freakout.style.color = flash ? '#ffffff' : '#ff0000';
            flash = !flash;
        }, 150); // Flash every 150ms
    }, messages.length * 1500 + 500);
});