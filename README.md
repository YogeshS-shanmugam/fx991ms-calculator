# fx-991MS Scientific Calculator

A fully functional web-based scientific calculator modeled after the **Casio fx-991MS**. Built with modern web technologies to replicate the authentic look and feel of the physical device.

## Features

- **Authentic Design**: Pixel-perfect recreation of the fx-991MS layout, colors, and typography.
- **Scientific Functions**: Support for Trigonometry (sin, cos, tan), Logarithms (log, ln), Powers, Roots, and more.
- **Two-Line Display**: Shows the input expression on the top line and the result on the bottom line, just like the real calculator.
- **Memory Features**: Standard memory operations (M+, M-, MR) and Answer memory (Ans).
- **Edit & Replay**: Complex expression editing and replay functionality.
- **Modes**: Supports Degree (Deg) and Radian input modes.

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom Grid & Flexbox)
- **Math Engine**: [mathjs](https://mathjs.org/)

## Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/YogeshS-shanmugam/fx991ms-calculator.git
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## Project Structure

- `src/components/Calculator.tsx`: Main calculator shell and layout.
- `src/components/Display.tsx`: The LCD screen component.
- `src/components/Button.tsx`: Reusable button component with Shift/Alpha labels.
- `src/utils/calculatorLogic.ts`: Core logic engine using mathjs.
