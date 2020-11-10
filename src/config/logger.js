import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json()
});

if(process.env.APP_ENV === 'production') {
    logger.add(new winston.transports.File({
       filename: 'errors.log',
       level: 'error'
    }))
} else {
    logger.add(new winston.transports.Console({
        format: winston.format.json()
    }))
}

export default logger;