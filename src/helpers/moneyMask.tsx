export function formatCurrency(input: any) {
    var onlyDigits = input.replace(/\D/g, '');

    var reversed = onlyDigits.split('').reverse().join('');

    var formatted = reversed.replace(/(\d{3})(?=\d)/g, '$1.');

    var result = 'R$ ' + formatted.split('').reverse().join('');

    return result;
}