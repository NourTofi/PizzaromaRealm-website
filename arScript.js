function darkMode() {

    const bodyElement = document.body;
    const modeText = document.querySelector('.mode-toggle span');
    const modeIcon = document.querySelector('.mode-toggle i');

    if (bodyElement.className === 'dark-mode') {
        bodyElement.className = '';
        modeText.textContent = "وضع مظلم"; 
        modeIcon.className = "fa-solid fa-moon";
    } else {
        bodyElement.className = 'dark-mode';
        modeText.textContent = "وضع فاتح";  
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

    var isReady = confirm("هل أنت جاهز للطلب؟");

    if (isReady) {

        var order = prompt("ماذا ترغب في طلبه؟");

        if (order) {
            alert("تم استقبال طلبك! لقد طلبت: " + order);
            updateClock()
            console.log(order);
        }
        else {
            alert("لم تحدد طلبًا.");
        }
    }
    else {
        alert("تم إلغاء الطلب.");
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
        nameError.innerHTML = "<h6>يجب عليك كتابة اسمك.</h6>";
        hasError = true;
    } else {
        nameError.innerHTML = "";
    }
    
    if (!emailInput.value) {
        emailError.innerHTML = "<h6>يجب عليك كتابة بريدك الإلكتروني.</h6>";
        hasError = true;
    } else {
        emailError.innerHTML = "";
    }
    
    if (!numberInput.value) {
        numberError.innerHTML = "<h6>يجب عليك كتابة رقمك.</h6>";
        hasError = true;
    } else {
        numberError.innerHTML = "";
    }
    
    if (!addressInput.value) {
        addressError.innerHTML = "<h6>يجب عليك كتابة عنوانك.</h6>";
        hasError = true;
    } else {
        addressError.innerHTML = "";
    }
    
    if (hasError) {
        event.preventDefault();
    }
    else {
        alert("تم حفظ معلوماتك في موقعنا.");
    }
    
}
// /////////////////////////////////
var specialDishes = [
    {
        title: "زيتون وفيتا",
        description: "زيتون أسود وأخضر؛ لفة فيتا وإكليل الجبل.",
        imageSrc: "image/Carnivores Carnival.jpg"
    },
    {
        title: "بيتزا الفطر البيضاء",
        description: "بيتزا بيضاء مع مجموعة من الفطر ورذاذ من زيت الثوم الحار.",
        imageSrc: "image/Basil Bliss.jpg"
    },
    {
        title: "تفاح كراميل",
        description: "سكر قرفة، شرائح التفاح؛ وصفة مكرملة حلوة.",
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
//     "زيتون أسود وأخضر؛ لفة فيتا وإكليل الجبل.",
//     "بيتزا بيضاء مع مجموعة من الفطر ورذاذ من زيت الثوم الحار.",
//     "سكر قرفة، شرائح التفاح؛ وصفة مكرملة حلوة."
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
        alert("سيكون طلبك في عنوانك خلال 15 دقيقة.");
    }

    let updateDisplay = function () {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('clock').textContent = `${formattedMinutes}:${formattedSeconds}`;

        if (timeLeft === 0) {
            alert('طلبك في عنوانك الآن.');
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
//         alert("سيكون طلبك في عنوانك خلال 15 دقيقة.");
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
//                 alert('طلبك في عنوانك الآن.');
//             }

//         }, i * 1000);
//     }
// }

// \\\\\\\\\\\\\\\\\\\\\\
function showOrder() {

    const numberOfPizzas = 12;

    let orderDetails = "";

    for (let i = 1; i <= numberOfPizzas; i++) {
        let pizzaName = document.getElementById(`pizzaName${i}`).innerText;
        let pizzaQuantity = document.getElementById(`pizzaQuantity${i}`).value;

        if (pizzaQuantity && pizzaQuantity > 0) {
            orderDetails += `لقد طلبت ${pizzaQuantity} من ${pizzaName}\n`;
        }
    }

    if (orderDetails) {
        alert(orderDetails);
        updateClock()
    } else {
        alert("لم يتم طلب أي بيتزا.");
    }
}




