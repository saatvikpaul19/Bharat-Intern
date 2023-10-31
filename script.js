
function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value === "") {
        alert("Please enter a value in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    fahrenheitInput.value = fahrenheit.toFixed(2);
}
