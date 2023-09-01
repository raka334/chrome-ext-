// this is click button on agree toggle
const button = document.getElementById('agreepolicy');
if (button) {
    // Simulate a click event on the button
    button.click();
} else {
    console.log("Button not found!");
}
// this is to add username 
const element = document.querySelector('[name="username"]');

if (element) {
    element.value = '12106539';
} else {
    console.log('No element with the specified pb-role attribute found.');
}



const password = document.querySelector('[name="password"]');

if (password) {
    password.value = 'aman1234';
} else {
    console.log('No element with the specified pb-role attribute found.');
}



const buttonElement = document.getElementById('loginbtn');

if (buttonElement) {
    
    buttonElement.click();
} else {
    console.log('Button element not found.');
}