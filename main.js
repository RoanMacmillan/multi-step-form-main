const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentTab = 0;

showTab(currentTab);


function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "flex";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (n == (x.length - 2)) {
        nextBtn.innerHTML = "Confirm";
        nextBtn.style.backgroundColor = 'hsl(243, 100%, 62%)';
        calcTotalCosts();
    } else {
        nextBtn.innerHTML = "Next Step";
        nextBtn.style.backgroundColor = 'hsl(213, 96%, 18%)';

    }

    if (n === (x.length - 1)) {

        document.getElementById('navigation').style.display = 'none';
    }
    //... and run a function that will display the correct step indicator:
    highlightCurrentStep(n)
}


function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    clearErrors();
    showTab(currentTab);
}


document.getElementById('underline').addEventListener('click', () => {
    nextPrev(-2);
});

prevBtn.addEventListener('click', () => {
    nextPrev(-1);
});

nextBtn.addEventListener('click', () => {
    nextPrev(1);
});

// form validation for name, email and phone number //

function validateForm() {

    let valid = true;

    nameInput = document.getElementById('name');
    phoneInput = document.getElementById('phone');
    emailInput = document.getElementById('email');

    if (nameInput.value === '') {

        nameInput.classList.add('invalid');
        document.getElementById('nameError').innerHTML = 'This field is required'

        valid = false;

    } if (emailInput.value === '' || validateEmail(emailInput.value)) {

        emailInput.classList.add('invalid');
        document.getElementById('emailError').innerHTML = 'Not a valid email';

        valid = false;

    } if (phoneInput.value === '') {

        phoneInput.classList.add('invalid');
        document.getElementById('phoneError').innerHTML = 'Not a valid phone number'

        valid = false;
    }

    return valid;

}

// email regex function
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


// Clears errors when succesful submission
function clearErrors() {

    const errors = document.querySelectorAll('.error');

    errors.forEach((error) => {

        error.innerHTML = '';

    })

    const inputs = document.querySelectorAll('.info');

    inputs.forEach((input) => {

        input.classList.remove('invalid');

    })

}

function highlightCurrentStep(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}



const planBtn = document.querySelectorAll('.billing-option');

planBtn.forEach((btn) => {

    btn.addEventListener('click', () => {

        const planSummary = document.querySelector('.choice');
        const planOption = btn.children[1].childNodes[1].innerHTML;

        planSummary.innerHTML = planOption;

        const priceSummary = document.getElementById('price-choice');

        const priceOption = btn.children[1].childNodes[3].innerHTML;

        priceSummary.innerHTML = priceOption;

    })

})


const toggleBtn = document.getElementById('toggle-btn');
const yearlyStorage = document.getElementById('yearly-storage');
const yearlyCustom = document.getElementById('yearly-custom');
const yearlyCustom2 = document.getElementById('custom-price');
const arcade = document.getElementById('arcade-price');
const pro = document.getElementById('pro-price');
const advanced = document.getElementById('advanced-price');
const yearly = document.getElementById('yearly-add-on');
const online = document.getElementById('online-price');
const storage2 = document.getElementById('storage2');

toggleBtn.addEventListener('change', () => {

    document.getElementById('yearlyText').classList.toggle('text');
    document.getElementById('monthlyText').classList.toggle('gray');


    if (toggleBtn.checked) {

        arcade.innerHTML = '$90/yr';
        advanced.innerHTML = '$120/yr'
        pro.innerHTML = '$150/yr';
        yearly.innerHTML = '+$10/yr';
        online.innerHTML = '+$10/yr';
        yearlyCustom.innerHTML = '+$20/yr';
        yearlyStorage.innerHTML = '+$20/yr';
        yearlyCustom2.innerHTML = '+$20/yr';
        storage2.innerHTML = '+$20/yr';

    } else {

        yearlyCustom2.innerHTML = '$2/mo';
        arcade.innerHTML = '$9/mo';
        advanced.innerHTML = '$12/mo'
        pro.innerHTML = '$15/mo';
        yearly.innerHTML = '+$1/mo';
        online.innerHTML = '+$1/mo';
        yearlyCustom.innerHTML = '+$2/mo';
        yearlyStorage.innerHTML = '+$2/mo';
        storage2.innerHTML = '+$2/mo';



    }

})

// const serviceAddOn = document.getElementById('service-add-on');
// let addOnItem = document.createElement('div');
// const containerTest = document.getElementById('test-append');

// serviceAddOn.addEventListener('change', () => {

//     if (serviceAddOn.checked) {

        




//     } else {



//     }

// })

// const customAddOn = document.getElementById('custom-add-on');
// let addOnItem2 = document.createElement('div');


// customAddOn.addEventListener('change', () => {

//     if (customAddOn.checked) {


//         addOnItem2.innerHTML = `<div id="child-2" class="finishing-child">

//         <span class="left">Larger Storage</span>

//         <span id="yearly-storage" class="price">+$2/mo</span>


//       </div>`;

//       containerTest.append(addOnItem2);


//     } else {

//         addOnItem2.remove();

//     }

// })

// const storageAddOn = document.getElementById('storage-add-on');
// let addOnItem3 = document.createElement('div');

// storageAddOn.addEventListener('change', () => {

//     if (storageAddOn.checked) {

//         addOnItem3.innerHTML = `<div id="child-3" class="finishing-child">

//         <span class="left">Customizable Profile</span>

//         <span id="yearly-custom" class="price">+$2/mo</span>


//       </div>`;

//       containerTest.append(addOnItem3);

//     } else {

//         addOnItem3.remove();
//     }

// })

// checkbox active states //
const addOnInput = document.querySelectorAll('.add-on-option');
const addOnChoice = document.querySelectorAll('.add-on-container');
const addOnArray = [...addOnChoice];

[...addOnInput].forEach((input, index) => {

    input.addEventListener('change', e => {

        addOnArray[index].classList.toggle('active-add-on', e.target.checked);

    })

});

function calcTotalCosts() {

    const planAmount = document.getElementById('price-choice');
    const newPlan_Amount = parseInt(planAmount.innerText.replace("$", "").replace("/mo", "").replace("/yr", ""));
    const storeAddOn_amounts = [];

    const addOn_amounts = document.querySelectorAll(".price");
    addOn_amounts.forEach((amount) => {
        const newAddOn_amount = parseInt(amount.innerText.replace("+$", "").replace("/mo", "").replace("/yr", ""));
        storeAddOn_amounts.push(newAddOn_amount)
    });

    const newStoredAddOn_amounts = storeAddOn_amounts.reduce((a, b) => a + b, 0);
    const total = newPlan_Amount + newStoredAddOn_amounts;
    const container = document.getElementById('total-amount');
    container.innerText = `+$${total}`;

}