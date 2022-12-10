const msgerForm = get('.msger-inputarea');
const msgerInput = get('.msger-input');
const msgerChat = get('.msger-chat');

const BOT_IMG = 'bot.png';
const PERSON_IMG = 'user.png';
const BOT_NAME = 'BPMNAssistantBot';
const PERSON_NAME = 'You';

get('#hello-msg-time').innerHTML = formatDate(new Date());

// addChat(BOT_NAME, BOT_IMG, 'left', `message`);

msgerForm.addEventListener('submit', event => {
    event.preventDefault();
    const msgText = msgerInput.value;

    if (!msgText) return;

    msgerInput.value = '';

    addChat(PERSON_NAME, PERSON_IMG, 'right', msgText);
    output(msgText);
});

function output(input) {
    let product;

    const delay = input.split(' ').length * 100;

    setTimeout(() => {
        addChat(BOT_NAME, BOT_IMG, 'left', product);
    }, delay);
}

function addChat(name, img, side, text) {
    const msgHTML = `<div class='msg ${side}-msg'>
      <div class='msg-img' style='background-image: url(${img})'></div>
      <div class='msg-bubble'>
        <div class='msg-info'>
          <div class='msg-info-name'>${name}</div>
          <div class='msg-info-time'>${formatDate(new Date())}</div>
        </div>
        <div class='msg-text'>${text}</div>
      </div>
    </div>`;

    msgerChat.insertAdjacentHTML('beforeend', msgHTML);
    msgerChat.scrollTop += 500;
}

function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = '0' + date.getHours();
    const m = '0' + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}