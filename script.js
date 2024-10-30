// const emailInput = document.getElementById('emailInput');
// const message = document.getElementById('message');

// emailInput.addEventListener('focus', () => {
//   message.classList.remove('hidden');
//   message.classList.add('red-message')
//   emailInput.classList.add('red-border');
// });



// const lukasInput = document.getElementById('lukaInput');
// const luksMessage = document.getElementById('luksMessage');

// lukasInput.addEventListener('focus', () => {
//     luksMessage.classList.remove('hiddenUka'); // Removes the hidden class
//     luksMessage.classList.add('witeli'); // Adds the styling class
//     lukasInput.classList.add('border')
// });




// const forMobileInput = document.getElementById('forMobileInput');
// const forMobileDiv2 = document.getElementById('forMobileDiv2');

// forMobileInput.addEventListener('focus', () => {
//     forMobileDiv2.classList.remove('forMobileDiv2'); // Show the message
//     forMobileDiv2.classList.add('witeli') ; 
//     forMobileInput.classList.add('forMobileInputBorder'); // Add border
// });
// console.log( forMobileInput.classList.add('forMobileInputBorder'))


// const input2 = document.getElementById('input2');
// const message2 = document.getElementById('message2');

//     input2.addEventListener('focus', () => {
//         message2.classList.remove("hidden");
//         message2.classList.add('witeli');
//         input2.classList.add('border')

//     })

////////////////////////////////////////////////////////////////




// document.addEventListener('DOMContentLoaded', () => {
//     const removalButton = document.getElementById('removalButton');
//     const mainDiv = document.getElementById('MainDiv');

//     removalButton.addEventListener('click', () => {
//         mainDiv.remove(); // Removes the entire MainDiv from the DOM
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const footerRemovalButton = document.getElementById('footerRemovalButton');
//     const footerDiv = document.getElementById('footerDiv');
    
//     footerRemovalButton.addEventListener('click', () => {
//         footerDiv.remove();
//     })
// });



const buttonEmail = document.getElementById('buttonEmail');
const message = document.getElementById('message');

    buttonEmail.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.classList.add('marginio');
        message.classList.add('witeli');
    });    


