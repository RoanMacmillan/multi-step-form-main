// checkbox active states //
const addOnInput = document.querySelectorAll('.add-on-option');
const addOnChoice = document.querySelectorAll('.add-on-container');
const addOnArray = [...addOnChoice];

[...addOnInput].forEach((input,index) => {

  input.addEventListener('change' , e => {

    addOnArray[index].classList.toggle('active-add-on', e.target.checked);

  })

});

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
    } else {
      nextBtn.innerHTML = "Next Step";
      nextBtn.style.backgroundColor = 'hsl(213, 96%, 18%)';

    }

    if (n === (x.length - 1)) {

        document.getElementById('navigation').style.display = 'none';
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
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

    } if (emailInput.value ==='' || validateEmail(emailInput.value)) {

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

  function fixStepIndicator(n) {
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
  const prices = document.querySelectorAll('.price-2');


  toggleBtn.addEventListener('change', () => {

    document.getElementById('yearlyText').classList.toggle('text');
    document.getElementById('monthlyText').classList.toggle('gray');


    if (toggleBtn.checked) {

        document.getElementById('arcade-price').innerHTML = '$90/yr';
        document.getElementById('advanced-price').innerHTML = '$120/yr'
        document.getElementById('pro-price').innerHTML = '$150/yr';
        document.getElementById('yearly-add-on').innerHTML = '$10/yr';
        document.getElementById('online-price').innerHTML = '$10/yr';
        
        prices.forEach((price) => {

            price.innerHTML = '$20/yr';

        })


    } else {

        document.getElementById('arcade-price').innerHTML = '$9/mo';
        document.getElementById('advanced-price').innerHTML = '$12/mo'
        document.getElementById('pro-price').innerHTML = '$15/mo';
        document.getElementById('yearly-add-on').innerHTML = '$1/mo';
        document.getElementById('online-price').innerHTML = '$1/mo';

        
        prices.forEach((price) => {

            price.innerHTML = '$2/mo';

        })

    }

  })

  const serviceAddOn = document.getElementById('service-add-on');

  serviceAddOn.addEventListener('change', () => {

    if (serviceAddOn.checked) {
        document.getElementById('child-1').classList.add('addOns');
    } else {
        document.getElementById('child-1').classList.remove('addOns');
    }

  })

  const customAddOn = document.getElementById('custom-add-on');

  customAddOn.addEventListener('change', () => {

    if (customAddOn.checked) {

        document.getElementById('child-2').classList.add('addOns');
    } else {
        document.getElementById('child-2').classList.remove('addOns');
    }

  })

  const storageAddOn = document.getElementById('storage-add-on');

  storageAddOn.addEventListener('change', () => {

    if (storageAddOn.checked) {
        document.getElementById('child-3').classList.add('addOns');
    } else {
        document.getElementById('child-3').classList.remove('addOns');
    }

  })




