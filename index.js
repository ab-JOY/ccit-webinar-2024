window.addEventListener('load', () => {
    function $(selector) {
        const element = document.querySelector(selector)
        return element
    }

    
    const passwordField = $("#password")
    const generatePassword = $("#button-addon2")
    generatePassword.addEventListener('click', (generatePassword) => {
        generatePassword.preventDefault()
        const value = "acbdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        const len = 16

        let password = ""
        for (let i = 0; i < len; i++) {
            const randomNumber = Math.floor(Math.random() * value.length)
            password += value.charAt(randomNumber)
        }

        passwordField.value = password
    })

    const login = $("#frmLogin")
    login.addEventListener('submit', (event) => {
        event.preventDefault()
        alert("login success")    
    });
})


