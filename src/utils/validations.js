export const required = value => value ? undefined : 'Please fill in this field.'

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined


const maxLength = max => value => value && value.length > max ? `The maximum number of characters is ${max}!` : undefined 
const maxLengthValue = maxLength(18);
const emailMaxValue = maxLength(25);

const minLength = min => value => value && value.length < min ? `Must be at least ${min} characters!` : undefined
const minLengthValue = minLength(2)

const comparePasswords = (value, allValues) => value !== allValues.password ? 'The passwords don\'t match' : <span><p className="match-message">Password match!</p></span>


export const validationField = ({input, label, type, meta: {touched, error, warning}}) => (

    <div className="validation-field-container">
        {/* <label>{label}</label> */}
        <div >
            <input 
            className="input" {...input} placeholder={label} type={type} 
            ></input>    
        </div>
        <div className="error-container">
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
