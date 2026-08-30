const form = document.querySelector("#signup-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const cPass = document.querySelector("#confirm-password");

form.onsubmit = async (e) => {
    e.preventDefault();

    const values = {
        username: username.value,
        password: password.value
    }

    // Validation check
    if(values.password !== cPass.value) {
        alert("Please write correct password");
        return; 
    }
    let obj =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: values.username,
            password: values.password
        })
    };

    const response = await (await fetch("/auth/signup",obj)).text();
    if (response == "success") {
        alert("signin success");
    }
}
