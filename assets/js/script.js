let password = document.getElementById('password');
let generatePassword = document.getElementById('generate');
let copyToClipboard = document.getElementById('copy');
let sourceArray = [];

//Click generate password button
generatePassword.addEventListener('click', () => {
    event.preventDefault();
    sourceArray = [];
    //Prompt for length of password (between 8 and 128 characters)
    let pwLength = prompt('Choose a number between 8-128 for password length');
    while(pwLength > 128 || pwLength < 8 || isNaN(pwLength)) {
        pwLength = prompt('Choice must only be a numeric value between 8 & 128');
    }
    if (!pwLength) return;
    //Prompt for additional query filters
let upper = confirm('Select OK if the password should have uppercase letters');
let lower = confirm('Select OK if the password should have lowercase letters');
let numbers = confirm('Select OK if the password should contain numbers');
let specials = confirm('Select OK if the password should contain special characters');
let passwordString = '';
    sourceArray = pwGenerateFlex(upper, lower, numbers, specials);
    for(let i = 0; i < pwLength; ++i) {
        randomNum = Math.floor(Math.random() * Math.floor(sourceArray.length));
let character = String.fromCharCode(sourceArray[randomNum]);
    passwordString += character;
}
    password.innerHTML = passwordString;
});