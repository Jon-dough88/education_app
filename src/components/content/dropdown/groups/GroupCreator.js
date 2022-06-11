import React from 'react';
import { Field, reduxForm} from 'redux-form';

// import { fetchUser } from '../../../../businessLogic/users/usersActions';
// import { getRefreshToken } from '../../../../businessLogic/users/usersActions';
// import { findGroupName } from '../../../../businessLogic/groups/groupActions';
// import { fetchStudentList } from '../../../../businessLogic/groups/groupActions';
import StudentListItem from './StudentListItem';
// import { handleSubmit } from './GroupCreationPage';

import { required, maxLengthValue, minLengthValue } from '../../../../utils/validations';

 

import './Groups.css'



const validationField = ({input, label, type, meta: {touched, error, warning}}) => (

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


// let GroupCreator = props => {
//     const { onSubmit } = props

//     return (
//         <form onSubmit = { onSubmit }>
//             <div className="form-group">
//                 <Field 
//                     className="form-control form-control-lg"
//                     name="groupName"
//                     component={validationField}
//                     type="input"
//                     label="Group name"
//                     validate={[ required ]}
//                 />

//             </div>
//             <button className="btn btn-lg btn-primary" type="submit">Create group</button>
//         </form>
//     )
// }

// // const { handleSubmit } = this.props

// GroupCreator = reduxForm({
//     form: 'groupCreator',
//     // handleSubmit
// })(GroupCreator)

// export default GroupCreator

        let GroupCreator = props => {
            
            const { handleSubmit, onChange, pristine, reset, submitting } = props
            // const { onSubmit, pristine, reset, submitting } = props

            return (
                <div className="jumbotron group-creation-menu">
                    <div className="row">
                        <div className="col col-lg-12 col-sm-6">
                            <h1>Group Creation Menu</h1>
                        </div>
                        <div className="col col-lg-12 col-sm-6">
                            <form className="form-inline justify-content-center" onSubmit={ handleSubmit }>
                            {/* <form className="form-inline justify-content-center" onSubmit={ onSubmit }> */}

                                <div className="form-group">
                                    <Field className="form-control form-control-lg" 
                                    name="groupName"
                                    component={validationField}
                                    type="text"
                                    label="Group name"
                                    validate={[required]}
                                    onChange={ onChange }
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="groupLevel_container">
                                        <label className="groupLevel_label">
                                            <Field name="groupLevel" 
                                                    className="groupLevel_btn" 
                                                    component="input" 
                                                    type="radio" 
                                                    value="L1" />{' '}
                                            L1
                                        </label>
                                        <label className="groupLevel_label">
                                            <Field name="groupLevel" className="groupLevel_btn" component="input" type="radio" value="L2" />{' '}
                                            L2
                                        </label>
                                        <label className="groupLevel_label">
                                            <Field name="groupLevel" className="groupLevel_btn" component="input" type="radio" value="L3" />{' '}
                                            L3
                                        </label>
                                        </div>
                                </div>
                                <div>
                                <button className="btn btn-lg btn-primary createGroup-btn" type="submit" disabled={pristine || submitting}>Create</button>
                    
                                <button className="btn btn-lg btn-warning" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>   
                             </div>


                            </form>

                        </div>
                    </div>
                    
                </div>    
            )
        }


        



export default reduxForm({
    form: 'groupCreator',
    // submit
})(GroupCreator)

 
// export default GroupCreator;