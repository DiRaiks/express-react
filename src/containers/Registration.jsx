import React from 'react';

import CustomInput from '../components/CustomInput';

class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const fields = [
                {label: 'Login', type: 'text'},
                {label: 'Password', type: 'password'},
                {label: 'Email', type: 'email'}
            ];
        return (
            <div>
                {fields && fields.map((field) => {
                    return (
                        <CustomInput
                            key={field.label}
                            label={field.label}
                            placeholder={field.label}
                            type={field.type} />
                    )
                })}
            </div>
        )
    }
}

export default Registration;
