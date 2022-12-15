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

    if (nameInput.value === '' || !isNaN(nameInput.value)) {

        nameInput.classList.add('invalid');
        document.getElementById('nameError').innerHTML = 'This field is required'

        valid = false;

    } else {

        nameInput.classList.remove('invalid');
        document.getElementById('nameError').innerHTML = ''

    }
    
    
    
    if (emailInput.value === '' || !validateEmail(emailInput.value)) {

        emailInput.classList.add('invalid');
        document.getElementById('emailError').innerHTML = 'Not a valid email';

        valid = false;

    } else {

        emailInput.classList.remove('invalid');
        document.getElementById('emailError').innerHTML = '';
    }
    
    
    if (phoneInput.value === '' || isNaN(phoneInput.value) || phoneInput.value.length < 10) {

        phoneInput.classList.add('invalid');
        document.getElementById('phoneError').innerHTML = 'Not a valid phone number'

        valid = false;
    } else {

        phoneInput.classList.remove('invalid');
        document.getElementById('phoneError').innerHTML = ''
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

// add plan option and plan price to summary // 

const btn = document.querySelectorAll('.billing-option');

btn.forEach((btn) => {

    btn.addEventListener('click', () => {

        const planSummary = document.querySelector('.choice');
        const planOption = btn.children[1].childNodes[1].innerHTML;
        planSummary.innerHTML = planOption;

        const priceSummary = document.getElementById('price-choice');
        const priceOption = btn.children[1].childNodes[3].innerHTML;
        priceSummary.innerHTML = priceOption;

    })

})

// change active classes on plan buttons

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {

var current = document.getElementsByClassName("activee");
  current[0].className = current[0].className.replace(" activee", "");
  this.className += " activee";

}

);
}

// fixes summary ammounts if they are active when user toggles

function fixError() {

const choice = document.querySelector('.choice');

 if (choice.innerHTML === 'Arcade') {

     priceChoice.innerHTML = arcade.innerHTML;
 }

 if (choice.innerHTML === 'Advanced') {

    priceChoice.innerHTML = advanced.innerHTML;

 }

 if (choice.innerHTML === 'Pro') {

    priceChoice.innerHTML = pro.innerHTML;

 }

}

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
const priceChoice = document.getElementById('price-choice');


// changes from monthly to yearly when clicking toggle //

toggleBtn.addEventListener('click', () => {

    document.getElementById('yearlyText').classList.toggle('text');
    document.getElementById('monthlyText').classList.toggle('gray');

    if (toggleBtn.checked) {
        
        toggleYearlyStates()
        
    } else {

        toggleMonthlyStates();
    }

    fixError();

})



function toggleYearlyStates()  {

document.querySelectorAll('.bonus').forEach((bonus) => {

    bonus.classList.add('flex');
})

document.getElementById('total-text').innerHTML = 'Total (per year)'

arcade.innerHTML = '$90/yr';
        advanced.innerHTML = '$120/yr'
        pro.innerHTML = '$150/yr';
        online.innerHTML = '+$10/yr';
        yearlyCustom2.innerHTML = '+$20/yr';
        storage2.innerHTML = '+$20/yr';

        if (childOne.classList.contains('flex')){

            yearly.innerHTML = '+$10/yr';

        } else {

            yearly.innerHTML = '+$0/yr'
        }
    

        if (childTwo.classList.contains('flex')){

            yearlyStorage.innerHTML = '+$20/yr';

        } else {

            yearlyStorage.innerHTML = '+$0/yr'
        }

        if (childThree.classList.contains('flex')){

            yearlyCustom.innerHTML = '+$20/yr';

        } else {

            yearlyCustom.innerHTML = '+$0/yr';
        }

}

function toggleMonthlyStates() {

    document.querySelectorAll('.bonus').forEach((bonus) => {

        bonus.classList.remove('flex');
    })
    document.getElementById('total-text').innerHTML = 'Total (per month)'


    arcade.innerHTML = '$9/mo';
        advanced.innerHTML = '$12/mo'
        pro.innerHTML = '$15/mo';
        online.innerHTML = '+$1/mo';
        yearlyCustom2.innerHTML = '+$2/mo';
        storage2.innerHTML = '+$2/mo';


        if (childOne.classList.contains('flex')){

            yearly.innerHTML = '+$1/mo';

        } else {

            yearly.innerHTML = '+$0/mo'
        }
        
        if (childTwo.classList.contains('flex')){

            yearlyStorage.innerHTML = '+$2/mo';

        } else {

            yearlyStorage.innerHTML = '+$0/mo'
        }

        if (childThree.classList.contains('flex')){

            yearlyCustom.innerHTML = '+$2/mo';

        } else {

            yearlyCustom.innerHTML = '+$0/mo';
        }

}


const serviceAddOn = document.getElementById('service-add-on');
const containerTest = document.getElementById('test-append');

const childOne = document.getElementById('child-1');

serviceAddOn.addEventListener('change', () => {

    const yearlyService = document.getElementById('yearly-add-on');

    // const onlineService = document.getElementById('online-price');

    if (serviceAddOn.checked) {

       childOne.classList.add('flex');
       yearlyService.innerHTML = online.innerHTML;


    } else {

        childOne.classList.remove('flex');
        yearlyService.innerHTML = '+$0/m';

    }

})

const childTwo = document.getElementById('child-2');
const storageAddOn = document.getElementById('storage-add-on');

storageAddOn.addEventListener('change', () => {

    const yearlyStorage = document.getElementById('yearly-storage');

    if (storageAddOn.checked) {

        childTwo.classList.add('flex');
        yearlyStorage.innerHTML = storage2.innerHTML;

    } else {

        childTwo.classList.remove('flex');
        yearlyStorage.innerHTML = '+$0/m';

    }

})

const customAddOn = document.getElementById('custom-add-on');
const childThree = document.getElementById('child-3');
customAddOn.addEventListener('change', () => {

    const yearlyCustom = document.getElementById('yearly-custom');

    if (customAddOn.checked) {

        childThree.classList.add('flex');
        yearlyCustom.innerHTML = yearlyCustom2.innerHTML;

    } else {

        childThree.classList.remove('flex');
        yearlyCustom.innerHTML = '+$0/m';

    }
})

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
    const newPlanAmount = parseInt(planAmount.innerText.replace("$", "").replace("/mo", "").replace("/yr", ""));
    const storeAddOnAmounts = [];

    const addOnAmounts = document.querySelectorAll(".price");
    addOnAmounts.forEach((amount) => {
        const newAddOnAmount = parseInt(amount.innerText.replace("+$", "").replace("/mo", "").replace("/yr", ""));
        storeAddOnAmounts.push(newAddOnAmount)
    });

    const newStoredAddOnAmounts = storeAddOnAmounts.reduce((a, b) => a + b, 0);
    const total = newPlanAmount + newStoredAddOnAmounts;
    const container = document.getElementById('total-amount');
    container.innerText = `+$${total}`;

}


