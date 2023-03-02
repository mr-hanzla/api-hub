function addValueToSpan() {
    let monthlyIncomeInputTag = document.getElementById("monthly-income-input");
    let monthlyIncomeTag = document.getElementById("monthly-income");

    let monthlyIncome = Number(monthlyIncomeInputTag.value);
    let yearlyIncome = monthlyIncome * 12;

    monthlyIncomeTag.innerText = "Rs. " + monthlyIncome.toLocaleString('hi-IN');

    if (monthlyIncomeTag.innerText == "Rs. 0") {
        monthlyIncomeTag.innerText = "$";
    }
}

function calculateTax() {
    console.log('Working Bruh, button input is working');
}
