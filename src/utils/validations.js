export const required = value => value ? undefined : 'Please fill in this field.'


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
