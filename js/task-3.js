const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
    const value = e.currentTarget.value.trim();

    if (value === "") {
        output.textContent = "Anonymous"
        return;
    }
    
    output.textContent = value;
});