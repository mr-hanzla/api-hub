let monthlyIncomeInputTag = document.getElementById("monthly-income-input");
monthlyIncomeInputTag.addEventListener("keyup", addValueToSpan);

document.getElementById("clear-btn").addEventListener("click", clearInputValue);


function addValueToSpan() {
    let monthlyIncome = Number(monthlyIncomeInputTag.value);
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

function clearInputValue() {
    monthlyIncomeInputTag.value = "";
    addIncomeValueToTag(document.getElementById("monthly-income"), 0);
    addIncomeValueToTag(document.getElementById("yearly-income"), 0);
}
