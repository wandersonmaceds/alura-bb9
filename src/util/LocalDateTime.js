import moment from 'moment-timezone';

export default class  LocalDateTime {
    static parse(stringDate) {
        return moment.tz(stringDate, 'America/Sao_Paulo')
    }
}