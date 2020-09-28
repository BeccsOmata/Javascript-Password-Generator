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
//Generate password in alert or on page
let pwGenerateFlex = (upper, lower, number, special) => {
    if(upper) {
        sourceArray = sourceArray.concat(genArray(65, 90));
}
    if(lower) {
    sourceArray = sourceArray.concat(genArray(97, 122));
}
    if(number) {
        sourceArray = sourceArray.concat(genArray(48, 57));
}
    if(special) {
        sourceArray = sourceArray.concat(genArray(32, 47));
        sourceArray = sourceArray.concat(genArray(58, 64));
        sourceArray = sourceArray.concat(genArray(91, 96));
        sourceArray = sourceArray.concat(genArray(123, 126));
}
    return sourceArray;
}

let genArray = (start, end) => {
    let arr = [];
    for(let i = start; i <= end; ++i) {
    arr.push(i);
}
    return arr;
}