export default function addSeparator(number) {
    if (typeof number === "string")
        number = number.replaceAll(",", "")

    if (isNaN(parseInt(number)))
        return number

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}