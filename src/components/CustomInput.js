import React from 'react';

const CustomInput = (props) => {
    return (
        <div className="from-group row mb-3">
            <label className={props.labelClass} htmlFor={props.label}>{props.label}</label>
            <div className={props.divClass}>
                <input className={props.classInput} type={props.type}
                    value={props.value}
                    id={props.label}
                    onChange={props.onChange && props.onChange.bind(this, props.label)}
                    placeholder={props.placeholder}
                    />
            </div>
        </div>
    )
};

export default CustomInput;
