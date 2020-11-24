export default class ProcessExecuterService {
    constructor() {
        this._steps = [];
    }

    next(step) {
        if (step == null || step == undefined || typeof step.execute !== 'function') {
            throw new Error('Step must have the execute function');
        }
        this._steps.push(step);

        return this;
    }

    async execute() {
        try{
            let result = await this._steps[0].execute();
            for(let step = 1; step < this._steps.length; step++) {
                delete this._steps[step - 1];
                result = await this._steps[step].execute(result);
            }
        } catch (error) {
            console.log(error);
        }
    }
}