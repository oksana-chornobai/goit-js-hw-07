const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const regForm = e.target;
    const login = regForm.elements.email.value;
    const password = regForm.elements.password.value;


    if (login.trim() === "" || password.trim() === "") {
        return alert("All form fields must be filled in");
    }

    console.log(`Email: ${login}, Password: ${password}`)
    regForm.reset();
    
})


