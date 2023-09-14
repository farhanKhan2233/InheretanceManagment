document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const sonsInput = document.getElementById("sons");
    const daughtersInput = document.getElementById("daughters");
    const leftAmountInput = document.getElementById("leftAmount");
    const sonsShareResult = document.getElementById("sonsShare");
    const daughtersShareResult = document.getElementById("daughtersShare");

    calculateButton.addEventListener("click", function () {
        const s = parseFloat(sonsInput.value);
        const d = parseFloat(daughtersInput.value);
        const la = parseFloat(leftAmountInput.value);

        if (!isNaN(s) && !isNaN(d) && !isNaN(la)) {
            const sr = s * 1 + d * 0.5;
            const sos = (1 / sr) * la;
            const sod = (0.5 / sr) * la;
           

            sonsShareResult.textContent = `The share of sons: ${sos.toFixed(2)}`;
            daughtersShareResult.textContent = `The share of daughters: ${sod.toFixed(2)}`;
        } else {
            alert("Please enter valid numeric values for all inputs.");
        }
    });
});


// ==============================================

document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateAreaAndAmount);
});

function calculateAreaAndAmount() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const pricePerSquareFoot = parseFloat(document.getElementById("price").value);

    if (isNaN(length) || isNaN(width)) {
        alert("Please enter valid values for length and width.");
        return;
    }

    const area = calculateArea(length, width);

    document.getElementById("totalArea").textContent = area.toFixed(2);

    if (!isNaN(pricePerSquareFoot)) {
        const totalAmount = calculateTotalAmount(area, pricePerSquareFoot);
        document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
    } else {
        document.getElementById("totalAmount").textContent = "N/A";
    }
}

function calculateArea(length, width) {
    return length * width;
}

function calculateTotalAmount(area, pricePerSquareFoot) {
    return area * pricePerSquareFoot;
}
