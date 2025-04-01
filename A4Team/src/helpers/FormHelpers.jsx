export const isNumeric = (value) => {
    return /^\d*$/.test(value)  // value có thể là ''
}

export const isWithoutAccents = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value)
}

export const isIssueDate = (value) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return regex.test(value)
}