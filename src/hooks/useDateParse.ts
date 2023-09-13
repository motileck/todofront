import moment, {Moment} from "moment";
import "moment-timezone";
export const useDateParse = (date : Moment) => {
    const formattedDate = moment(date);
    const day = formattedDate.date();
    const month = formattedDate.format('MMMM');
    const time = formattedDate.tz('Europe/Moscow').format('HH:mm');
    const newDate = {
        day: day,
        month: month,
        time: time
    }
    return newDate;
}