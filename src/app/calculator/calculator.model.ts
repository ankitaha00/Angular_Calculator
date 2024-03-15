export class CalculatorModel {

    functionButtons: { name: string, value: string, type: string }[] = [
        { name: 'AC', value: 'AC', type: 'FUNCTION' },
        { name: '+/-', value: '+/-', type: 'FUNCTION' },
        { name: 'C', value: 'C', type: 'FUNCTION' }
    ]

    numericButtons: { name: string, value: string, type: string }[] = [
        { name: '7', value: '7', type: 'NUMERIC' },
        { name: '8', value: '8', type: 'NUMERIC' },
        { name: '9', value: '9', type: 'NUMERIC' },
        { name: '4', value: '4', type: 'NUMERIC' },
        { name: '5', value: '5', type: 'NUMERIC' },
        { name: '6', value: '6', type: 'NUMERIC' },
        { name: '1', value: '1', type: 'NUMERIC' },
        { name: '2', value: '2', type: 'NUMERIC' },
        { name: '3', value: '3', type: 'NUMERIC' },
        { name: '.', value: '.', type: 'NUMERIC' },
        { name: '0', value: '0', type: 'NUMERIC' }
    ]

    operationButtons: { name: string,value: string, type: string }[] = [
        { name: '+',value: '+', type: 'OPERATION' },
        { name: '-',value: '+', type: 'OPERATION' },
        { name: '*',value: '+', type: 'OPERATION' },
        { name: '/',value: '+', type: 'OPERATION' },
        { name: '=',value: '+', type: 'OPERATION' }
    ]

}
