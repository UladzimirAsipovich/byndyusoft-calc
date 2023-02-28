import type { ControlProps } from './Control.types';
import styles from './Control.module.scss';

/** Компонент кнопки управления */
const Control: React.FC<ControlProps> = ({ controlItem, controlHandler }) => {
  return (
    <div
      className={styles.calculator__control}
      onClick={() => controlHandler(controlItem)}
    >
      <div
        className={`${styles.calculator__control_item} ${
          controlItem.action === 'EQUAL'
            ? styles.calculator__control_item_equal
            : ''
        }`}
        title={`${controlItem.title}${
          controlItem.keyboardAlias
            ? `. Гор. клавиша - ${controlItem.keyboardAlias}`
            : ''
        }`}
        data-testid={controlItem.action}
      >
        <span>{controlItem.value}</span>
      </div>
    </div>
  );
};

export default Control;
