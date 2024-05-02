function validateName() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const nameSuccess = document.getElementById("nameSuccess");
    const nameValue = name.value.trim(); // 사용자가 입력한 값 가져오기

    if (nameValue === "") {
        nameError.style.display = "block";
        nameSuccess.style.display = "none";
        return false; // 이름이 유효하지 않음
    } else {
        nameError.style.display = "none";
        nameSuccess.style.display = "block";
        return true; // 이름이 유효함
    }
}

// 이름 입력란에서 포커스를 잃을 때
document.getElementById("name").addEventListener("blur", function() {
    validateName(); // 이름 유효성 검사 수행
    toggleSignUpButton(); // 가입하기 버튼 상태 업데이트
});

function validateNickname() {
    const nickname = document.getElementById("nickname");
    const nicknameError = document.getElementById("nicknameError");
    const nicknameSuccess = document.getElementById("nicknameSuccess");
    const nicknameValue = nickname.value;

    nicknameError.style.display = (nicknameValue.length < 2 || nicknameValue.length > 5) ? "block" : "none";
    nicknameSuccess.style.display = (nicknameValue.length < 2 || nicknameValue.length > 5) ? "none" : "block";
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailSuccess = document.getElementById("emailSuccess");
    const emailValue = email.value;

    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    emailError.style.display = emailReg.test(emailValue) ? "none" : "block";
    emailSuccess.style.display = emailReg.test(emailValue) ? "block" : "none";
}

function validatePassword() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordSuccess = document.getElementById("passwordSuccess");
    const passwordValue = password.value;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    passwordError.style.display = passwordRegex.test(passwordValue) ? "none" : "block";
    passwordSuccess.style.display = passwordRegex.test(passwordValue) ? "block" : "none";
}

function validateConfirm() {
    const password = document.getElementById("password");
    const passwordValue = password.value;
    const confirm = document.getElementById("confirm");
    const confirmError = document.getElementById("confirmError");
    const confirmSuccess = document.getElementById("confirmSuccess");
    const confirmValue = confirm.value;

    confirmError.style.display = confirmValue === passwordValue ? "none" : "block";
    confirmSuccess.style.display = confirmValue === passwordValue ? "block" : "none";
}

function toggleSignUpButton() {
    const signUpButton = document.getElementById("open");
    signUpButton.disabled = !validateForm();
}

document.getElementById("name").addEventListener("input", function() {
    validateName();
    toggleSignUpButton();
});
document.getElementById("nickname").addEventListener("input", function() {
    validateNickname();
    toggleSignUpButton();
});
document.getElementById("email").addEventListener("input", function() {
    validateEmail();
    toggleSignUpButton();
});
document.getElementById("password").addEventListener("input", function() {
    validatePassword();
    toggleSignUpButton();
});
document.getElementById("confirm").addEventListener("input", function() {
    validateConfirm();
    toggleSignUpButton();
});

// 페이지 로드 시 가입하기 버튼 상태 업데이트
toggleSignUpButton();

