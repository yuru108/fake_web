document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.submit-button');
    const h1 = document.querySelector('h1');
    const linkCss = document.querySelector('.link-css');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.querySelector('.input-box');
        const email = emailInput.value.trim();

        if (email) {
            h1.textContent = '請用Weverse帳號登入。';
            submitButton.innerHTML = '<span>登入</span>';
            linkCss.textContent = '尚未擁有帳號？  用Weverse帳號註冊';

            addPasswordField()
        }
    });
});

function addPasswordField() {
    const form = document.querySelector('form');
    const mailDiv = document.getElementById('mail-div');
    const passwordDiv = document.createElement('div');
    passwordDiv.className = 'password-field'; // 设置 div 的类名为 'password-field'

    mailDiv.style = "margin-top: 40px";
    passwordDiv.style = "margin-top: 40px";
    document.getElementById('content-bottom').style.bottom = 0;

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = '密碼';
    passwordLabel.style.fontSize = '13px';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.className = 'input-box';
    passwordInput.placeholder = '密碼';
    passwordInput.required = true;

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    form.insertBefore(passwordDiv, form.childNodes[2]);
}
