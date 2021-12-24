const inputFormNode = document.querySelector('.feedback-form');
inputFormNode.addEventListener('input', onFormSubmit);
const data = {};

function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.forEach((value, mail) => {
        data[mail] = value;
        console.log('data', data);
    });
}