import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

//Tạm thời hiển thị UTC+7 bằng cách cộng thêm 7 giờ, khi nào backend fix xong bug convert timezone
//thì hãy xóa .add(7, 'hour') và có thể xóa relativeTime nếu muốn

export function formattedDateTime (dateTime) {
    return dayjs(dateTime).add(7, 'hour').format('MMMM D, YYYY [at] h:mm A')
};


export function timeAgo (dateTime) {
    return dayjs(dateTime).add(7, 'hour').fromNow();
};

export function formattedDate (date) {
    return dayjs(date).add(7, 'hour').format("MMM D, YYYY");
}

export function formattedDateMonthYear (dateTime) {
    return dayjs(dateTime).add(7, 'hour').format("D MMMM YYYY");
}

export function formattedDateDetail (dateTime) {
    return dayjs(dateTime).add(7, 'hour').format('MMMM D, YYYY [at] h:mm:ss A')
};