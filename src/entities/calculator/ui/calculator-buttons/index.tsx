import { CalculatorButton } from '@/shared';
import { useCalculatorStore } from '../../model';
import styles from '../styles.module.scss';

export function CalculatorButtons() {
  const addDigit = useCalculatorStore((state) => state.addDigit);
  const removeDigit = useCalculatorStore((state) => state.removeDigit);
  const chooseOperation = useCalculatorStore((state) => state.chooseOperation);
  const clear = useCalculatorStore((state) => state.clear);
  const evalutate = useCalculatorStore((state) => state.evalutate);
  const reverse = useCalculatorStore((state) => state.reverse);
  const percent = useCalculatorStore((state) => state.percent);

  return (
    <div className={styles.calculatorButtons}>
      <CalculatorButton backgroundColor="gray" onClick={() => clear()}>
        C
      </CalculatorButton>
      <CalculatorButton backgroundColor="gray" onClick={() => reverse()}>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.3321 7.55469L23.8867 6.72264L22.2226 5.61324L21.6679 6.44529L9.66795 24.4453L9.11325 25.2773L10.7773 26.3867L11.3321 25.5547L23.3321 7.55469ZM9.5 5.99998V6.99998V8.99998H11.5H12.5V11H11.5H9.5V13V14H7.5V13V11H5.5H4.5V8.99998H5.5H7.5V6.99998V5.99998H9.5ZM21.5 21H20.5V23H21.5H27.5H28.5V21H27.5H21.5Z" fill="black" />
        </svg>
      </CalculatorButton>
      <CalculatorButton backgroundColor="gray" onClick={() => percent()}>
        %
      </CalculatorButton>
      <CalculatorButton backgroundColor="blue" onClick={() => chooseOperation('÷')}>
        ÷
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('7')}>
        7
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('8')}>
        8
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('9')}>
        9
      </CalculatorButton>
      <CalculatorButton backgroundColor="blue" onClick={() => chooseOperation('×')}>
        ×
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('4')}>
        4
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('5')}>
        5
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('6')}>
        6
      </CalculatorButton>
      <CalculatorButton backgroundColor="blue" onClick={() => chooseOperation('–')}>
        –
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('1')}>
        1
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('2')}>
        2
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('3')}>
        3
      </CalculatorButton>
      <CalculatorButton backgroundColor="blue" onClick={() => chooseOperation('+')}>
        +
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('.')}>
        .
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => addDigit('0')}>
        0
      </CalculatorButton>
      <CalculatorButton backgroundColor="white" onClick={() => removeDigit()}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 7.00002H11H27H28V8.00002V24V25H27H11H10.5858L10.2929 24.7071L2.29292 16.7071L1.58582 16L2.29292 15.2929L10.2929 7.29291L10.5858 7.00002ZM11.4142 9.00002L4.41424 16L11.4142 23H26V9.00002H11.4142ZM15 11.5858L15.7071 12.2929L18 14.5858L20.2929 12.2929L21 11.5858L22.4142 13L21.7071 13.7071L19.4142 16L21.7071 18.2929L22.4142 19L21 20.4142L20.2929 19.7071L18 17.4142L15.7071 19.7071L15 20.4142L13.5858 19L14.2929 18.2929L16.5858 16L14.2929 13.7071L13.5858 13L15 11.5858Z" fill="black" />
        </svg>
      </CalculatorButton>
      <CalculatorButton backgroundColor="blue" onClick={() => evalutate()}>
        =
      </CalculatorButton>
    </div>
  );
}
