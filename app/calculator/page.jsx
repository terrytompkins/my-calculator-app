'use client'

import React, { useState } from 'react';
import styles from './Calculator.module.css'; // Assuming you have your CSS in this file

const Display = ({ value }) => {
  return (
    <div className={styles.display}>{value}</div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.calculatorButton} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  
  // Handles button clicks
  const handleButtonClick = (label) => {
    switch (label) {
      case 'C':
        setDisplayValue('0');
        break;
      case '=':
        try {
          setDisplayValue(eval(displayValue).toString());
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      default:
        if (displayValue === '0') {
          setDisplayValue(label);
        } else {
          setDisplayValue(displayValue + label);
        }
        break;
    }
  };


  const buttons = [
    ['MC', 'MR', 'M+', 'M-', 'MS', 'M^'],
    ['%', 'CE', 'C', '⊗'], 
	['1/x', 'x^2', '√x', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']
  ];

  return (
    <div className={styles.calculator}>
      <Display value={displayValue} />
      <div className={styles.buttonPanel}>
        {buttons.map((row, index) => (
          <div key={index} className={index === 0 ? `${styles.row} ${styles.firstRow}` : styles.row}>
            {row.map(button => (
              <Button key={button} label={button} onClick={handleButtonClick} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
