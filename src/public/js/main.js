$(function() {
    const socket = io();

    // obtaining dom elements from interface
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    // events
    $messageForm.submit(e => {
        e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('')        
    })

})
