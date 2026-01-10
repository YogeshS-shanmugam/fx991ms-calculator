import { evaluate, format, sin, cos, tan, log, unit } from 'mathjs';

export interface CalculatorState {
    expression: string;
    result: string;
    memory: number; // M
    ans: number;    // Previous answer
    isShift: boolean; // Shift key active?
    isAlpha: boolean; // Alpha key active?
    mode: 'COMP' | 'CMPLX' | 'SD' | 'REG' | 'BASE';
    angleUnit: 'Deg' | 'Rad' | 'Gra';
    isError: boolean;
}

export const initialState: CalculatorState = {
    expression: '',
    result: '0',
    memory: 0,
    ans: 0,
    isShift: false,
    isAlpha: false,
    mode: 'COMP',
    angleUnit: 'Deg',
    isError: false,
};

// Map of buttons to their shifted/alpha values if necessary
// This is a simplified map. 
const SHIFT_MAP: Record<string, string> = {
    'sin': 'asin(', 'cos': 'acos(', 'tan': 'atan(',
    'ln': 'e^', 'log': '10^',
    'x²': 'sqrt(', // Assuming x^2 key exists (it's usually x^2)
    // Add more as needed
};

export const processInput = (state: CalculatorState, input: string): CalculatorState => {
    // Reset error on new input
    if (state.isError && input !== 'AC') {
        return { ...state, isError: false, expression: '', result: '0' };
        // Or maybe keep result? Standard calc resets.
    }

    // Handle Control Keys
    if (input === 'AC') return { ...initialState, memory: state.memory, ans: state.ans, angleUnit: state.angleUnit }; // Keep Mem/Ans
    if (input === 'ON') return { ...initialState, memory: state.memory }; // Reset fully?

    if (input === 'SHIFT') return { ...state, isShift: !state.isShift, isAlpha: false };
    if (input === 'ALPHA') return { ...state, isAlpha: !state.isAlpha, isShift: false };

    if (input === 'DEL') {
        return { ...state, expression: state.expression.slice(0, -1) };
    }

    if (input === 'Ans') {
        return { ...state, expression: state.expression + 'Ans', isShift: false, isAlpha: false };
    }

    // Calculate Result
    if (input === '=') {
        try {
            if (!state.expression) return state;

            // Define scope for functions
            const scope = {
                Ans: state.ans,
                sin: (x: any) => {
                    if (state.angleUnit === 'Deg' && typeof x === 'number') return sin(unit(x, 'deg'));
                    return sin(x);
                },
                cos: (x: any) => {
                    if (state.angleUnit === 'Deg' && typeof x === 'number') return cos(unit(x, 'deg'));
                    return cos(x);
                },
                tan: (x: any) => {
                    if (state.angleUnit === 'Deg' && typeof x === 'number') return tan(unit(x, 'deg'));
                    return tan(x);
                },
                // Log base 10
                log: (x: any) => {
                    // mathjs log(x) is ln. log10(x) is base 10.
                    // But we want to override 'log' key which appears in expression? 
                    // Users type 'log(100)'.
                    // If we define 'log' in scope, it overrides.
                    // We need to import log10 from mathjs.
                    return Math.log10(x); // Simple version
                },
                ln: (x: any) => Math.log(x)
            };

            // Replace symbols for mathjs
            let expr = state.expression
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/π/g, 'pi')
                .replace(/√/g, 'sqrt')
                .replace(/Ans/g, state.ans.toString());

            const res = evaluate(expr, scope);

            return {
                ...state,
                result: format(res, { precision: 10 }), // Format to avoid 0.0000000004
                ans: Number(res), // Store to Ans
                expression: '',
                isShift: false,
                isAlpha: false,
            };
        } catch (e) {
            return { ...state, result: 'Syntax ERROR', isError: true };
        }
    }

    // Handle Shifted Inputs
    let effectiveInput = input;
    if (state.isShift) {
        if (SHIFT_MAP[input]) {
            effectiveInput = SHIFT_MAP[input];
        } else if (input === 'sin') { effectiveInput = 'asin('; } // Just in case
        // Add logic
    }

    // Reset modifiers
    const newState = {
        ...state,
        expression: state.expression + effectiveInput,
        isShift: false,
        isAlpha: false
    };

    return newState;
};
