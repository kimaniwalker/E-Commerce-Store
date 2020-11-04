import React from 'react';
import './styles.css';

export default function Options({
    label,
    options,
    selectedOption,
    setSelectedOption
}) {
    

    return (
        <>
         
                <div className="options">
                    {label}
                    {options.map((option) => (
                        <span key={option.name} className={`option ${selectedOption === option ? "selected" : null }`} onClick={()=>setSelectedOption(option)}>{option.name}</span>

                    ))
                    }
                </div>   
        </>
    );
}
