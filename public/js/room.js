document.addEventListener('DOMContentLoaded', () => {

    const displayCode = document.getElementById('display-code');
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code') || 'AB12CD'; 
    displayCode.innerText = code;

    const p2Name = document.getElementById('p2-name');
    const p2Status = document.getElementById('p2-status');
    const roomStatusText = document.getElementById('room-status-text');
    const waitingMsg = document.getElementById('waiting-msg');
    
    const startGameBtn = document.getElementById('start-game-btn');
    const simJoinBtn = document.getElementById('sim-join-btn');
    const simFullBtn = document.getElementById('sim-full-btn');
    
    const waitingSection = document.getElementById('waiting-section');
    const gameSection = document.getElementById('game-section');
    const roomFullUI = document.getElementById('room-full-ui');
    
    const leaveRoomBtn = document.getElementById('leave-room-btn');
    const copyCodeBtn = document.getElementById('copy-code-btn');

    let playersConnected = 1;

    simJoinBtn.addEventListener('click', () => {
        if (playersConnected === 2) return;
        
        playersConnected = 2;
        roomStatusText.innerText = '2 / 2 PLAYERS';
        
        p2Name.innerText = '👤 Friend';
        p2Name.style.color = '#003249';
        
        p2Status.innerText = 'READY';
        p2Status.classList.remove('status-waiting');
        p2Status.classList.add('status-ready');
        
        waitingMsg.innerText = 'Room Ready';
        startGameBtn.disabled = false;
        
        simJoinBtn.style.display = 'none';
    });

    simFullBtn.addEventListener('click', () => {
        roomFullUI.classList.remove('hide');
    });

    startGameBtn.addEventListener('click', () => {
        // Hide waiting UI
        waitingSection.classList.add('hide');
        document.querySelector('.room-header').classList.add('hide');
        
        // Show exact original game UI
        gameSection.classList.remove('hide');
    });

    leaveRoomBtn.addEventListener('click', () => {
        if (confirm('Leave this room?')) {
            window.location.href = 'lobby.html';
        }
    });

    copyCodeBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(code).then(() => {
            const originalText = copyCodeBtn.innerText;
            copyCodeBtn.innerText = 'COPIED!';
            setTimeout(() => { copyCodeBtn.innerText = originalText; }, 2000);
        });
    });

});

