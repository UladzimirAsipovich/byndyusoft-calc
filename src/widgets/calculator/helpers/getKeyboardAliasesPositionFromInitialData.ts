import { T_CalculatorControls } from '../model/Calculator.types';
import InitialData from '../model/Calculator.model';

/** Тип алиасов клавиатуры { клавиша: [индекс строки, индекс контрола] } */
export type KeyboardAliasesPositions = { [key: string]: [number, number] };

const getKeyboardAliasesPositionFromInitialData = (
  data: T_CalculatorControls = InitialData
): KeyboardAliasesPositions | null => {
  let Positions: KeyboardAliasesPositions = {};
  if (!data) return null;

  data.forEach((row, rind) => {
    row.forEach((el, ind) => {
      if (el.keyboardAlias) {
        if (Array.isArray(el.keyboardAlias)) {
          return el.keyboardAlias.forEach(
            (alias) => (Positions[alias] = [rind, ind])
          );
        }
        Positions[el.keyboardAlias] = [rind, ind];
      }
    });
  });
  return Positions;
};

export default getKeyboardAliasesPositionFromInitialData;
