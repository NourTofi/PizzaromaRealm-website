
function darkMode() {

    const bodyElement = document.body;
    const modeText = document.querySelector('.mode-toggle span');
    const modeIcon = document.querySelector('.mode-toggle i');

    if (bodyElement.className === 'dark-mode') {
        bodyElement.className = '';
        modeText.textContent = "Dark Mode";
        modeIcon.className = "fa-solid fa-moon";
    } else {
        bodyElement.className = 'dark-mode';
        modeText.textContent = "Light Mode";
        modeIcon.className = "fa-solid fa-sun";
    }
}
// \\\\\\\\\\\\\\\\\\\\\\
function orderNowPopup() {

    let thePopup = document.getElementById("myPopup");

    if (thePopup.classList.contains('hidden')) {

        thePopup.classList.remove('hidden');
        updateClock()


    }
    else {

        thePopup.classList.add('hidden');
    }
}
// //////////////////////////////
function showOrderProcess() {

    var isReady = confirm("Are you ready to order?");

    if (isReady) {

        var order = prompt("What would you like to order?");

        if (order) {
            alert("Order received! You ordered: " + order);
            updateClock()
            console.log(order);
        }
        else {
            alert("You didn't specify an order.");
        }
    }
    else {
        alert("Order cancelled.");
    }
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function validated(event) {

    let hasError = false;

    let nameInput = document.forms['form']['name'];
    let emailInput = document.forms['form']['email'];
    let numberInput = document.forms['form']['number'];
    let addressInput = document.forms['form']['address'];

    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let numberError = document.getElementById('number-error');
    let addressError = document.getElementById('address-error');

    if (!nameInput.value) {
        nameError.innerHTML = "<h6>You have to write your name.</h6>";
        hasError = true;
    } else {
        nameError.innerHTML = "";
    }

    if (!emailInput.value) {
        emailError.innerHTML = "<h6>You have to write your email.</h6>";
        hasError = true;
    } else {
        emailError.innerHTML = "";
    }

    if (!numberInput.value) {
        numberError.innerHTML = "<h6>You have to write your number.</h6>";
        hasError = true;
    } else {
        numberError.innerHTML = "";
    }

    if (!addressInput.value) {
        addressError.innerHTML = "<h6>You have to write address.</h6>";
        hasError = true;
    } else {
        addressError.innerHTML = "";
    }

    if (hasError) {
        event.preventDefault();
    }
    else {
        alert("Your info at our website.");
    }
}
// /////////////////////////////////

var specialDishes = [
    {
        title: "Olives & Feta Twist",
        description: "Black, green olives; feta and rosemary twist.",
        imageSrc: "image/Carnivores Carnival.jpg"
    },
    {
        title: "Mushroom White Pizza",
        description: "White pizza with an array of mushrooms and a spicy garlic oil drizzle.",
        imageSrc: "image/Basil Bliss.jpg"
    },
    {
        title: "Apple Caramel Treat",
        description: "Cinnamon sugar, apple slices; sweet caramelized treat.",
        imageSrc: "image/Fiery Fungi.jpg"
    }
];
function updateContent() {

    var randomIndex = Math.floor(Math.random() * specialDishes.length);
    var content = specialDishes[randomIndex];

    var titleElement = document.getElementById('title-text');
    var descriptionElement = document.getElementById('description-text');
    var imageElement = document.getElementById('content-image');

    titleElement.innerText = content.title;
    descriptionElement.innerText = content.description;
    imageElement.src = content.imageSrc;
}


// var specialDishes = [
//     "Black, green olives; feta and rosemary twist.",
//     "White pizza with an array of mushrooms and a spicy garlic oil drizzle.",
//     "Cinnamon sugar, apple slices; sweet caramelized treat."
// ];

// var currentIndex = 0;

// function updateContent() {
//     var h3Element = document.getElementById('special-text');
//     h3Element.innerText = specialDishes[currentIndex];

//     currentIndex++;

//     if (currentIndex >= specialDishes.length) {
//         currentIndex = 0;
//     }
// }

// /////////////////////////

let timeLeft = 15 * 60;
let orderTime = true;

function updateClock() {
    if (orderTime) {
        orderTime = !orderTime;
        alert("Your order will be at your address in 15 minutes.");
    }

    let updateDisplay = function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('clock').textContent = `${formattedMinutes}:${formattedSeconds}`;

        if (timeLeft === 0) {
            alert('Your order is at your address.');
        }

        timeLeft--;
    };

setInterval(updateDisplay, 1000);
}

// let timeLeft = 15 * 60;
// let orderTime = true;

// function updateClock() {
//     if (orderTime) {
//         orderTime = !orderTime;
//         alert("Your order will be at your address in 15 minutes.");
//     }

//     for (let i = 0; i < timeLeft; i++) {

//         setTimeout(function() {

//             let currentLeft = timeLeft - i;

//             let minutes = Math.floor(currentLeft / 60);
//             let seconds = currentLeft % 60;

//             let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
//             let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

//             document.getElementById('clock').textContent = `${formattedMinutes}:${formattedSeconds}`;

//             if (i === timeLeft) {
//                 alert('Your order is at your address.');
//             }

//         }, i * 1000);
//     }
// }

// \\\\\\\\\\\\\\\\\\\\\\

function showOrder() {

    const numberOfPizzas = 12;

    let orderDetails = "";

    for(let i = 1; i <= numberOfPizzas; i++) {
        let pizzaName = document.getElementById(`pizzaName${i}`).innerText;
        let pizzaQuantity = document.getElementById(`pizzaQuantity${i}`).value;

        if(pizzaQuantity && pizzaQuantity > 0) {
            orderDetails += `You ordered ${pizzaQuantity} of ${pizzaName}\n`; 
        }
    }

    if(orderDetails) {
        alert(orderDetails);
        updateClock()
    } else {
        alert("No pizzas ordered.");
    }
}




