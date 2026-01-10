import React from 'react';

interface ButtonProps {
    label: string;
    subLabel?: string; // Shift function (Yellow)
    alphaLabel?: string; // Alpha function (Red)
    onClick: () => void;
    variant?: 'num' | 'func' | 'ac' | 'action'; // func is dark, num is light, ac is orange/red
    shape?: 'rect' | 'round' | 'pill'; // pill for top row
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    label,
    subLabel,
    alphaLabel,
    onClick,
    variant = 'num',
    shape = 'rect',
    className = '',
    style: customStyle
}) => {

    const getBgColor = () => {
        switch (variant) {
            case 'func': return 'var(--color-key-func)';
            case 'ac': return 'var(--color-key-ac)';
            case 'num': return 'var(--color-key-num)';
            case 'action': return 'var(--color-key-func)'; // E.g. DEL, AC
            default: return 'var(--color-key-num)';
        }
    };

    const getTextColor = () => {
        if (variant === 'num') return 'var(--color-text-dark)';
        return 'var(--color-text-light)';
    };

    const style: React.CSSProperties = {
        backgroundColor: getBgColor(),
        color: getTextColor(),
        borderRadius: shape === 'round' ? '50%' : '4px', // simplified for now
        // Shape logic handled in CSS class or here
    };

    // Custom button styling logic for "pill" shape (small top buttons)
    const isPill = shape === 'pill';

    return (
        <div className={`btn-wrapper ${className}`}>
            {/* Labels above the button */}
            <div className="btn-labels">
                {subLabel && <span style={{ color: 'var(--color-accent-shift)' }}>{subLabel}</span>}
                {alphaLabel && <span style={{ color: 'var(--color-accent-alpha)', marginLeft: 'auto' }}>{alphaLabel}</span>}
            </div>

            <button
                onClick={onClick}
                style={{
                    ...style,
                    ...customStyle,
                    width: isPill ? '40px' : '100%',
                    height: isPill ? '25px' : '40px',
                    fontSize: isPill ? '0.8rem' : '1.1rem',
                    boxShadow: 'var(--shadow-btn)',
                    borderBottom: '2px solid rgba(0,0,0,0.3)', // simulate depth
                }}
                className="btn-base"
            >
                {label}
            </button>
        </div>
    );
};

export default Button;
