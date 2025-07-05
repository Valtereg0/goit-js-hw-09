const formData = {
    email: "",
    message: ""
}
const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");


// const dataSave = localStorage.getItem(storageKey);

// console.log(JSON.parse(dataSave));


form.addEventListener("input", formText);
form.addEventListener("submit", handleSubmit);
populateDataSave();

function formText(event) {
    const { name, value } = event.target;
  formData[name] = value;


    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function populateDataSave() {
    const dataSave = localStorage.getItem(storageKey);
    if (dataSave) {
        const dataParce = JSON.parse(dataSave);
        form.elements.email.value = dataParce.email || "";
        form.elements.message.value = dataParce.message || "";
    } 
};

function handleSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert("Fill please all fields");
    }
    
    console.log({email, message});

    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
}
