import type { DisplayProps } from './Display.types';
import styles from './Display.module.scss';
import { memo } from 'react';

const formatterNumber = new Intl.NumberFormat();

/** Компонент дисплея (истории и результата) калькулятора*/
const Display: React.FC<DisplayProps> = memo(({ history, result }) => {
  return (
    <div className={styles.calculator__display}>
      <div className={styles.calculator__computed_history}>
        {history.length
          ? history.map((el, ind) => <span key={ind}>{el}</span>)
          : null}
      </div>
      <div className={styles.calculator__computed_result}>
        <span
          style={{
            fontSize: `${
              result !== null && result.toString().length > 12
                ? 56 / formatterNumber.format(result).length / 0.072
                : 56
            }px`,
          }}
        >
          {result !== null ? formatterNumber.format(result) : ''}
        </span>
      </div>
    </div>
  );
});

Display.displayName = 'Display';

export default Display;
