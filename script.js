let currentInput = '';
        let currentOperator = '';
        let prevInput = '';

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function appendOperator(operator) {
            if (currentInput !== '') {
                if (prevInput !== '') {
                    calculate();
                }
                currentOperator = operator;
                prevInput = currentInput;
                currentInput = '';
                updateDisplay();
            }
        }

        function calculate() {
            if (currentInput !== '' && prevInput !== '' && currentOperator !== '') {
                const num1 = parseFloat(prevInput);
                const num2 = parseFloat(currentInput);
                let result = 0;

                switch (currentOperator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                }

                currentInput = result.toString();
                currentOperator = '';
                prevInput = '';
                updateDisplay();
            }
        }

        function clearDisplay() {
            currentInput = '';
            currentOperator = '';
            prevInput = '';
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = prevInput + currentOperator + currentInput;
        }