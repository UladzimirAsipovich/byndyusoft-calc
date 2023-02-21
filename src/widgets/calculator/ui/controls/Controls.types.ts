import { I_CalculatorProps } from '../../model/Calculator.types';
import { ControlProps } from '../control/Control.types';

/** Интерфейс передаваемых пропсов */
export interface ControlsProps
  extends I_CalculatorProps,
    Pick<ControlProps, 'controlHandler'> {}
