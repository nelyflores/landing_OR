function submitForm() {
    let Error = [];
    if (inputName.value === null || inputLastName.value === null || inputEmail.value === null || termsCheck.checked === false) {
        console.log("campo requerido...")
    }
    console.log("enviando...")
    return false
}