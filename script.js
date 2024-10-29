const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

emailInput.addEventListener('focus', () => {
  message.classList.remove('hidden');
  message.classList.add('red-message')
  emailInput.classList.add('red-border');
});


// const meoreInput = document.getElementById('input2');

// meoreInput.addEventListener('focus', () => {
//     message2.classList.add('red-message');
// })

// const meoreInput = document.getElementById('input2');
// const message2 = document.getElementById('message2'); // Ensure this element exists

// meoreInput.addEventListener('focus', () => {
//     message2.classList.remove('hidden'); // Show the message
//     message2.classList.add('red-message'); // Add the red-message class
// });
// console.log('red-message');


const lukasInput = document.getElementById('lukaInput');
const luksMessage = document.getElementById('luksMessage');

lukasInput.addEventListener('focus', () => {
    luksMessage.classList.remove('hiddenUka'); // Removes the hidden class
    luksMessage.classList.add('witeli'); // Adds the styling class
    lukasInput.classList.add('border')
});

