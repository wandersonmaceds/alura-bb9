import moment from 'moment-timezone';

export default class  LocalDateTime {
    static parse(stringDate) {
        return moment.tz(stringDate, 'America/Sao_Paulo')
    }

    static diff(date, unit) {
        return moment.tz().diff(date, unit);
    }
}