let monthlyIncomeInputTag = document.getElementById("monthly-income-input");
monthlyIncomeInputTag.addEventListener("keyup", addValueToSpan);

document.getElementById("clear-btn").addEventListener("click", clearInputValue);


function addValueToSpan() {
    let monthlyIncome = Number(monthlyIncomeInputTag.value);
    let yearlyIncome = monthlyIncome * 12;

    let taxValues = returnTaxValues(yearlyIncome)

    addIncomeValueToTag(document.getElementById("monthly-income"), monthlyIncome);
    addIncomeValueToTag(document.getElementById("monthly-taxable-amount"), taxValues.taxableIncome / 12);
    addIncomeValueToTag(document.getElementById("yearly-income"), yearlyIncome);
    addIncomeValueToTag(document.getElementById("yearly-taxable-amount"), taxValues.taxableIncome);
    addIncomeValueToTag(document.getElementById("yearly-tax"), taxValues.taxPercentage);
}

function addIncomeValueToTag(_tag, _income, _symbol = "$") {
    _tag.innerText = _income.toLocaleString('hi-IN');

    if (_tag.innerText == "0") {
        _tag.innerText = "__";
    }
}

function returnTaxValues(yearlyIncome) {
    // does not exceed Rs. 600,000 the rate of income tax is 0%.
    if (yearlyIncome < 600000)
        return { taxPercentage: 0.0, taxableIncome: 0.0, additionalTaxAmount: 0.0 }

    // exceeds Rs. 600,000 but does not exceed Rs. 1,200,000 the rate of income tax is 2.5% of the amount exceeding Rs. 600,000
    else if (yearlyIncome > 600000 && yearlyIncome <= 1200000)
        return { taxPercentage: 2.5, taxableIncome: yearlyIncome - 600000, additionalTaxAmount: 0.0 }

    // exceeds Rs. 1,200,000 but does not exceed Rs. 2,400,000 the rate of income tax is Rs. 15,000+12.5% of the amount exceeding Rs. 1,200,000.
    else if (yearlyIncome > 1200000 && yearlyIncome <= 2400000)
        return { taxPercentage: 12.5, taxableIncome: yearlyIncome - 1200000, additionalTaxAmount: 15000 }

    // exceeds Rs. 2,400,000 but does not exceed Rs. 3,600,000 the rate of income tax is Rs. 165,000 + 20% of the amount exceeding Rs. 2,400,000.
    else if (yearlyIncome > 2400000 && yearlyIncome <= 3600000)
        return { taxPercentage: 20.0, taxableIncome: yearlyIncome - 2400000, additionalTaxAmount: 165000 }

    // exceeds Rs. 3,600,000 but does not exceed Rs. 6,000,000 the rate of income tax is Rs. 405,000 + 25% of the amount exceeding Rs. 3,600,000.
    else if (yearlyIncome > 3600000 && yearlyIncome <= 6000000)
        return { taxPercentage: 25.0, taxableIncome: yearlyIncome - 3600000, additionalTaxAmount: 405000 }

    // exceeds Rs. 6,000,000 but does not exceed Rs. 12,000,000 the rate of income tax is Rs. 1,005,000 + 32.5% of the amount exceeding Rs. 6,000,000.
    else if (yearlyIncome > 6000000 && yearlyIncome <= 12000000)
        return { taxPercentage: 32.5, taxableIncome: yearlyIncome - 6000000, additionalTaxAmount: 1005000 }

    // exceeds Rs. 12,000,000 the rate of income tax is Rs. 2,955,000 + 35% of the amount exceeding Rs. 12,000,000.
    else if (yearlyIncome > 12000000)
        return { taxPercentage: 35.0, taxableIncome: yearlyIncome - 12000000, additionalTaxAmount: 2955000 }
}

function clearInputValue() {
    monthlyIncomeInputTag.value = "";
    addIncomeValueToTag(document.getElementById("monthly-income"), 0);
    addIncomeValueToTag(document.getElementById("yearly-income"), 0);
}
