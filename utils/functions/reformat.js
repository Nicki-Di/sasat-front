export default function reformat(number, NaNCheck = false) {
    if (typeof number === "string") {
        number = number.replaceAll(",", "")
    }
    if (Array.isArray(number)) {
        return number.join(' - ');
    }

    if (NaNCheck) {
        if (isNaN(parseInt(number)))
            return number
    } else {
        if (typeof number !== 'number') {
            return number
        }
    }


    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}