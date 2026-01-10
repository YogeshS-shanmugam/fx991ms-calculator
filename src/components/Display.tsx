import React from 'react';

interface DisplayProps {
    expression: string;
    result: string;
    isShift: boolean;
    isAlpha: boolean;
    mode: string;
    angleUnit: string;
    memory: boolean;
}

const Display: React.FC<DisplayProps> = ({
    expression,
    result,
    isShift,
    isAlpha,
    mode,
    angleUnit,
    memory
}) => {
    return (
        <div className="display-container">
            {/* Indicators Row */}
            <div className="display-indicators">
                <div>
                    <span style={{ opacity: isShift ? 1 : 0.1 }}>S</span>
                    <span style={{ opacity: isAlpha ? 1 : 0.1 }}>A</span>
                    <span style={{ opacity: memory ? 1 : 0.1 }}>M</span>
                    <span style={{ opacity: 0.1 }}>STO</span>
                    <span style={{ opacity: 0.1 }}>RCL</span>
                </div>
                <div>
                    <span>{angleUnit}</span>
                    <span style={{ opacity: 0.1 }}>FIX</span>
                    <span style={{ opacity: 0.1 }}>SCI</span>
                </div>
            </div>

            {/* Expression Line (Dot matrix simulation) */}
            <div className="display-line-expr">
                {expression}
            </div>

            {/* Result Line (Seven segment simulation) */}
            <div className="display-line-res">
                {result}
            </div>
        </div>
    );
};

export default Display;
