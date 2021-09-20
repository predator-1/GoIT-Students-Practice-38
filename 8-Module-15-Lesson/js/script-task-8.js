const formRef = document.querySelector('form');

formRef.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e);
})