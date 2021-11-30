function parseCount(value) {
     let numberParse = Number.parseInt(value);
        if (isNaN(numberParse)) {
            throw new Error("Невалидное значение");
        } else return numberParse;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error){
        return error;
    }
}