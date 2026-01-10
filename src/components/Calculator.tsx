import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { processInput, initialState } from '../utils/calculatorLogic';

const Calculator: React.FC = () => {
    const [state, setState] = useState(initialState);

    const handlePress = (label: string) => {
        setState(prev => processInput(prev, label));
    };

    return (
        <div className="calc-container">
            {/* Brand / Solar Panel Area */}
            <div className="brand-area">
                <div className="brand-text">
                    <span className="brand-casio">CASIO</span>
                    <span>fx-991MS</span>
                    <span className="brand-svpam">S-V.P.A.M.</span>
                </div>
                <div className="solar-panel"></div>
            </div>

            {/* Display */}
            <Display
                expression={state.expression}
                result={state.result}
                isShift={state.isShift}
                isAlpha={state.isAlpha}
                mode={state.mode}
                angleUnit={state.angleUnit}
                memory={state.memory !== 0}
            />

            {/* Keypad */}
            {/* Top Function Area (Shift, Alpha, Replay, Mode) */}
            <div className="grid-top">
                <div className="col-span-1"><Button label="SHIFT" variant="func" shape="pill" onClick={() => handlePress('SHIFT')} /></div>
                <div className="col-span-1"><Button label="ALPHA" variant="func" shape="pill" onClick={() => handlePress('ALPHA')} /></div>

                {/* Replay Button (Big circle in middle) */}
                <div className="replay-container">
                    <div className="replay-btn">
                        <div className="replay-text">REPLAY</div>
                    </div>
                </div>

                <div className="col-span-1"><Button label="MODE" variant="func" shape="pill" onClick={() => handlePress('MODE')} /></div>
                <div className="col-span-1"><Button label="ON" variant="func" shape="pill" onClick={() => handlePress('ON')} /></div>
            </div>

            {/* Upper Function Keys (Calc, Integ, etc) */}
            <div className="grid-func">
                <Button label="CALC" shape="pill" variant="func" onClick={() => handlePress('CALC')} className="col-span-1" />
                <Button label="∫dx" shape="pill" variant="func" onClick={() => handlePress('∫')} className="col-span-1" />
                <Button label="x⁻¹" shape="pill" variant="func" onClick={() => handlePress('x⁻¹')} className="col-span-1" />
                <Button label="const" shape="pill" variant="func" onClick={() => handlePress('const')} className="col-span-1" />
                <Button label="log" shape="pill" variant="func" onClick={() => handlePress('log')} className="col-span-1" />
                <Button label="ln" shape="pill" variant="func" onClick={() => handlePress('ln')} className="col-span-1" />
            </div>

            {/* More Function Keys (Fractions, Roots, Powers) */}
            <div className="grid-func">
                <Button label="(-)" shape="pill" variant="func" onClick={() => handlePress('(-)')} className="col-span-1" />
                <Button label="°'″" shape="pill" variant="func" onClick={() => handlePress("°'″")} className="col-span-1" />
                <Button label="hyp" shape="pill" variant="func" onClick={() => handlePress('hyp')} className="col-span-1" />
                <Button label="sin" shape="pill" variant="func" onClick={() => handlePress('sin')} className="col-span-1" />
                <Button label="cos" shape="pill" variant="func" onClick={() => handlePress('cos')} className="col-span-1" />
                <Button label="tan" shape="pill" variant="func" onClick={() => handlePress('tan')} className="col-span-1" />
            </div>

            {/* More Function Keys (RCL, ENG, ()) */}
            <div className="grid-func" style={{ marginBottom: '16px' }}>
                <Button label="RCL" shape="pill" variant="func" onClick={() => handlePress('RCL')} className="col-span-1" />
                <Button label="ENG" shape="pill" variant="func" onClick={() => handlePress('ENG')} className="col-span-1" />
                <Button label="(" shape="pill" variant="func" onClick={() => handlePress('(')} className="col-span-1" />
                <Button label=")" shape="pill" variant="func" onClick={() => handlePress(')')} className="col-span-1" />
                <Button label="," shape="pill" variant="func" onClick={() => handlePress(',')} className="col-span-1" />
                <Button label="M+" shape="pill" variant="func" onClick={() => handlePress('M+')} className="col-span-1" />
            </div>


            {/* Main Grid (Numbers, basic operators) */}
            <div className="grid-main">
                {/* Row 1 */}
                <Button label="7" onClick={() => handlePress('7')} />
                <Button label="8" onClick={() => handlePress('8')} />
                <Button label="9" onClick={() => handlePress('9')} />
                <Button label="DEL" variant="action" subLabel="INS" onClick={() => handlePress('DEL')} style={{ background: '#b84d4d', color: 'white' }} />
                <Button label="AC" variant="ac" subLabel="OFF" onClick={() => handlePress('AC')} />

                {/* Row 2 */}
                <Button label="4" onClick={() => handlePress('4')} />
                <Button label="5" onClick={() => handlePress('5')} />
                <Button label="6" onClick={() => handlePress('6')} />
                <Button label="×" variant="func" onClick={() => handlePress('×')} />
                <Button label="÷" variant="func" onClick={() => handlePress('÷')} />

                {/* Row 3 */}
                <Button label="1" onClick={() => handlePress('1')} />
                <Button label="2" onClick={() => handlePress('2')} />
                <Button label="3" onClick={() => handlePress('3')} />
                <Button label="+" variant="func" onClick={() => handlePress('+')} />
                <Button label="-" variant="func" onClick={() => handlePress('-')} />

                {/* Row 4 */}
                <Button label="0" onClick={() => handlePress('0')} />
                <Button label="." onClick={() => handlePress('.')} />
                <Button label="EXP" onClick={() => handlePress('EXP')} />
                <Button label="Ans" onClick={() => handlePress('Ans')} />
                <Button label="=" onClick={() => handlePress('=')} />
            </div>
        </div>
    );
};

export default Calculator;
