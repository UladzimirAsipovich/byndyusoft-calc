import type { ControlsProps } from './Controls.types';
import styles from './Controls.module.scss';
import Control from '../control/Control';
import { memo } from 'react';

/** Компонент кнопок управления */
const Controls: React.FC<ControlsProps> = memo(
  ({ calculatorControls, controlHandler }) => {
    return (
      <div className={styles.calculator__controls}>
        {calculatorControls.map((controlRow, ind) => {
          return (
            <div
              className={styles.calculator__control_row}
              key={'controlRow_' + ind}
            >
              {controlRow.map((controlItem, ind) => (
                <Control
                  controlItem={controlItem}
                  controlHandler={controlHandler}
                  key={controlItem.action + ind}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
);

Controls.displayName = 'Controls';

export default Controls;
