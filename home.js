const validPin = 1234;
const transactionData = [];

// reuseable code 

//functions to get input values

function getInputValueNumber(id){
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;
    // const inputFieldValueNumber = parseInt(inputFieldValue);
    // return inputFieldValueNumber;

    return parseInt(document.getElementById(id).value);
}

function getInputValue(id){
    // const inputField = document.getElementById(id);
    // const inputFieldValue = inputField.value;
    // return inputFieldValue;

    return document.getElementById(id).value;
}

// functions to get inner text 

function getInnerText(id){
    // const textElement = document.getElementById(id);
    // const textElementValue = textElement.innerText;
    // const textElementValueNumber = parseInt(textElementValue);
    // return textElementValueNumber;

    return parseInt(document.getElementById(id).innerText);
}

//function to set inner text

function setInnerText(value){
    // const availableBalanceElement = document.getElementById('available-balance');
    // availableBalanceElement.innerText = value;
    document.getElementById('available-balance').innerText = value;

}

//function to toggle forms

function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// highlight/toggling active button 

function highlightActiveButton(Id) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]', 'text-[#0874F2]', 'font-semibold');
        btn.classList.add('border-[#E6E6E6]');
    }
    const activeBtn = document.getElementById(Id);
    activeBtn.classList.remove('border-[#E6E6E6]');
    activeBtn.classList.add('border-[#0874F2]', 'bg-[#F3F8FE]', 'text-[#0874F2]', 'font-semibold');
}

// add money feature

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number');
    const addAmount = getInputValueNumber('add-amount');
    const addPin = getInputValueNumber('add-pin');

    let availableBalance = getInnerText('available-balance');

    if(accountNumber.length !== 11){
        return alert('Account number must be 11 digits');
    }
    if(addAmount <= 0 || isNaN(addAmount)){
        return alert('Amount must be a positive number');
    }
    if(addPin !== validPin){
        return alert('Your pin is incorrect');
    }

    const newBalance = availableBalance + addAmount;

    setInnerText(newBalance);

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

// cashout feature 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInnerText('available-balance');

    if(withdrawAmount > availableBalance){
        return alert('Insufficient balance');
    }

    if(withdrawAmount <= 0 || isNaN(withdrawAmount)){
    return alert('Enter a valid amount');
    }

    const newBalance = availableBalance - withdrawAmount;

    setInnerText(newBalance);

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

document.getElementById('transaction-button').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white mb-4 p-4 rounded-2xl">
                    <div class="flex items-center gap-4 ">
                        <div class="p-3 rounded-full bg-[#0808080D]"> <img src="/assets/wallet1.png" alt=""> </div>
                        <div>
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
        `;

        transactionContainer.appendChild(div);
    }
})

// toggling feature 

document.getElementById('add-button').addEventListener('click', function(){
    // document.getElementById('add-money-parent').style.display = 'block';
    // document.getElementById('cash-out-parent').style.display = 'none';

    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('add-money-parent').style.display = 'block';
    handleToggle('add-money-parent');

    // const formBtns = document.getElementsByClassName('form-btn');
    // for(const formBtn of formBtns){
    //     formBtn.classList.remove('border-[#0874F2]','bg-[#F3F8FE]','text-[#0874F2]','font-semibold');
    //     formBtn.classList.add('border-[#E6E6E6]');
    // }
    // document.getElementById('add-button').classList.remove('border-[#E6E6E6]');

    // document.getElementById('add-button').classList.add('border-[#0874F2]','bg-[#F3F8FE]','text-[#0874F2]','font-semibold');

    highlightActiveButton('add-button');
});

document.getElementById('cash-out-button').addEventListener('click',function(){
    // document.getElementById('cash-out-parent').style.display = 'block';
    // document.getElementById('add-money-parent').style.display = 'none';
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('cash-out-parent').style.display = 'block';
    handleToggle('cash-out-parent');

    highlightActiveButton('cash-out-button');

});

document.getElementById('transfer-button').addEventListener('click', function(){
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('transfer-money-parent').style.display = 'block';
    handleToggle('transfer-money-parent');

    highlightActiveButton('transfer-button');
});

document.getElementById('get-bonus-button').addEventListener('click', function(){
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('get-bonus-parent').style.display = 'block';
    handleToggle('get-bonus-parent');

    highlightActiveButton('get-bonus-button');
});

document.getElementById('pay-bill-button').addEventListener('click', function(){
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('pay-bill-parent').style.display = 'block';
    handleToggle('pay-bill-parent');

    highlightActiveButton('pay-bill-button');
});

document.getElementById('transaction-button').addEventListener('click', function(){
    // const forms = document.getElementsByClassName('form');
    // for(const form of forms){
    //     form.style.display = 'none';
    // }
    // document.getElementById('transaction-secton-parent').style.display = 'block';
    handleToggle('transaction-secton-parent');

    highlightActiveButton('transaction-button');
});

// log out feature

document.getElementById('log-out-button').addEventListener('click', function(){
    window.location.href = 'index.html';
});






