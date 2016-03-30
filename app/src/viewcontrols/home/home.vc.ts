import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import CalculatorService from '../../services/calculator/calculator.svc'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    constructor(calcServ: CalculatorService) {
        super();
    }

    context: any = {
        operandOne: '',
        operandTwo: ''
    };

    add() {
        if (this.inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        this.context.result = parseInt(this.context.operandOne) + parseInt(this.context.operandTwo);
        this.context.present = 'The result of adding ' + this.context.operandOne + ' and ' + this.context.operandTwo + ' is ' + this.context.result;
        this.resetNum();
    }

    subtract() {
        if (this.inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        this.context.result = this.context.operandOne - this.context.operandTwo;
        this.context.present = 'The result of subtracting ' + this.context.operandOne + ' and ' + this.context.operandTwo + ' is ' + this.context.result;
        this.resetNum();
    }

    multiply() {
        if (this.inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
        this.context.result = this.context.operandOne * this.context.operandTwo;
        this.context.present = 'The result of multiplying ' + this.context.operandOne + ' and ' + this.context.operandTwo + ' is ' + this.context.result;
        this.resetNum();
    }

    divide() {
        if (this.inputIsInvalid()) {
            alert('Both operands are required!');
            return
        }
         else if (this.context.operandTwo == 0) {
            alert('You cannot divide by zero. Do not perform the calculation, or else!');
            return
        }
        this.context.result = this.context.operandOne / this.context.operandTwo;
        this.context.present = 'The result of dividing ' + this.context.operandOne + ' and ' + this.context.operandTwo + ' is ' + this.context.result;
        this.resetNum();
    }
    
    resetNum() {
        this.context.operandOne = 0;
        this.context.operandTwo = 0;
    }
    
    inputIsInvalid() {
        if (this.context.operandOne === '' || this.context.operandTwo === '') {
            return true;
        } else {
            return false;
        }
    }


}

register.viewControl('home-vc', HomeViewControl, [CalculatorService]);
