import { createStore } from 'zustand/vanilla';

export type CalculatorOperation = '÷' | '×' | '–' | '+';

export type CalculatorState = {
  previousOperand: string | null;
  currentOperand: string;
  operation: CalculatorOperation | null;
};

export type CalculatorActions = {
  addDigit: (digit: string) => void;
  clear: () => void;
  removeDigit: () => void;
  chooseOperation: (operation: CalculatorOperation) => void;
  reverse: () => void;
  evalutate: () => void;
  percent: () => void;
};

export type CalculatorStore = CalculatorState & CalculatorActions;

export const initCalculatorStore = (): CalculatorState => {
  return {
    previousOperand: null,
    currentOperand: '',
    operation: null,
  };
};

export const defaultInitState: CalculatorState = {
  previousOperand: null,
  currentOperand: '',
  operation: null,
};

export const createCalculatorStore = (initState: CalculatorState = defaultInitState) => {
  return createStore<CalculatorStore>()((set) => ({
    ...initState,
    addDigit: (digit: string) =>
      set((state) => {
        if (digit === '0' && state.currentOperand === '0') {
          return state;
        }

        if (digit === '.' && state.currentOperand.includes('.')) {
          return state;
        }

        return { currentOperand: `${state.currentOperand}${digit}` };
      }),
    removeDigit: () => set((state) => ({ currentOperand: state.currentOperand.slice(0, -1) })),
    chooseOperation: (operation: CalculatorOperation) =>
      set((state) => ({
        ...state,
        previousOperand: `${state.currentOperand}`,
        operation,
        currentOperand: '',
      })),
    reverse: () => set((state) => ({ currentOperand: `${Number(-state.currentOperand)}` })),
    percent: () => set((state) => ({ currentOperand: `${Number(state.currentOperand) / 100}` })),
    evalutate: () =>
      set((state) => {
        switch (state.operation) {
          case '÷':
            return {
              ...state,
              operation: null,
              previousOperand: `${state.previousOperand}${state.operation}${state.currentOperand}`,
              currentOperand: `${Number(state.previousOperand) / Number(state.currentOperand)}`,
            };
          case '–':
            return {
              ...state,
              operation: null,
              previousOperand: `${state.previousOperand}${state.operation}${state.currentOperand}`,
              currentOperand: `${Number(state.previousOperand) - Number(state.currentOperand)}`,
            };
          case '×':
            return {
              ...state,
              operation: null,
              previousOperand: `${state.previousOperand}${state.operation}${state.currentOperand}`,
              currentOperand: `${Number(state.previousOperand) * Number(state.currentOperand)}`,
            };
          case '+':
            return {
              ...state,
              operation: null,
              previousOperand: `${state.previousOperand}${state.operation}${state.currentOperand}`,
              currentOperand: `${Number(state.previousOperand) + Number(state.currentOperand)}`,
            };
        }

        return state;
      }),
    clear: () =>
      set(() => ({
        previousOperand: null,
        currentOperand: '',
        operation: null,
      })),
  }));
};
