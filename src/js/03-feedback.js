import throttle from 'lodash.throttle';

const inputFormNode = document.querySelector('.feedback-form');
// inputFormNode.addEventListener('input', throttle(onFormSubmit, 500));
inputFormNode.addEventListener('input', onFormFill);
let data = {};

//////////////////////////////////////////////////
const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

export default {
    save,
    load,
};
//////////////////////////////////////////////////
let newData = {};

function onFormFill(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.forEach((value, name) => {
        data[name] = value;
        save('feedback-form-state', data);

        // console.log('ndfill', newData);
    });
}

function onFormLoad() {
    if (load('feedback-form-state', data) !== undefined) {
        newData = load('feedback-form-state', data);
    } else {
        newData.email = '';
        newData.message = '';
    }
    if (newData !== undefined) {
        inputFormNode.email.value = newData.email;
        inputFormNode.message.value = newData.message;
    } else {
        inputFormNode.email.value = '';
        inputFormNode.message.value = '';
    }
}
inputFormNode.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    console.log('dataloadata', load('feedback-form-state', data));

    localStorage.clear();
    inputFormNode.reset();
    // inputFormNode.children[2].disabled = true;
}

onFormLoad();