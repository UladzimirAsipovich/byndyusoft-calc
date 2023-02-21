import { I_CalculatorControl } from '../../model/Calculator.types';

/** Интерфейс передаваемых пропсов */
export interface ControlProps {
  controlItem: I_CalculatorControl;
  controlHandler: Function;
}
