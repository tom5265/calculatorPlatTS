import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class CalculatorService extends BaseService {

}

register.injectable('calculator-svc', CalculatorService);
