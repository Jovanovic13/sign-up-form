const message = document.querySelector('.matcher');
const p1 = document.querySelector('input#password');
const p2 = document.querySelector('input#confirmpw');
const submit = document.querySelector("button[type='submit']");

console.log(message.textContent, p1.textContent, p2.textContent, submit.textContent)

submit.addEventListener('click', ()=>{
    if (p1.value !== p2.value) {
        event.preventDefault();
        message.textContent = "*passwords do not match";
    }
})