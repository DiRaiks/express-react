import React from 'react';
import '../style/custom.scss';

import CustomInput from '../components/CustomInput';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    inputHandler = (label, e) => {
        e.preventDefault;
        this.setState({
            [label]: e.target.value
        })
    }

    registrationHandler = (e) => {
        e.preventDefault;
    }

    render() {
        const fields = [
                {label: 'Login', type: 'text'},
                {label: 'Password', type: 'password'},
                {label: 'Email', type: 'email'}
            ];
        return (
            <form style={{margin: '40px'}}>
                {fields && fields.map((field, index) => {
                    return (
                        <CustomInput
                            value={this.state[field.label]}
                            onChange={this.inputHandler}
                            key={field.label}
                            divClass='col-sm-11'
                            labelClass='col-sm-1 col-form-label'
                            classInput='form-control'
                            label={field.label}
                            placeholder={field.label}
                            type={field.type} />
                    )
                })}
                <div className="col-auto my-1">
                    <button onClick={this.registrationHandler} type="button" className="btn btn-primary">Registration</button>
                </div>
            </form>
        )
    }
}

export default Registration;
