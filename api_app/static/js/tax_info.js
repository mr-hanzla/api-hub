function addValueToSpan() {
    let monthlyIncome = Number(document.getElementById("monthly-income-input").value);
    let yearlyIncome = monthlyIncome * 12;

    addIncomeValueToTag(document.getElementById("monthly-income"), monthlyIncome);
    addIncomeValueToTag(document.getElementById("yearly-income"), yearlyIncome);
}

function addIncomeValueToTag(_tag, _income) {
    _tag.innerText = "Rs. " + _income.toLocaleString('hi-IN');

    if (_tag.innerText == "Rs. 0") {
        _tag.innerText = "$";
    }
}

function calculateTax() {
    console.log('Working Bruh, button input is working');
}
