import dayjs from "dayjs";


export function formattedDateTime (dateTime) {
    return dayjs(dateTime).format('MMMM D, YYYY [at] h:mm A')
};


export function timeAgo (dateTime) {
    return dayjs(dateTime).fromNow();
};

export function formattedDate (date) {
    return dayjs(date).format("MMM D, YYYY");
}