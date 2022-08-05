import React, {Component } from 'react';
import { connect } from 'react-redux';

class GroupModal extends Component {

    state = {  } 

    showStudentList =() => {
        console.log("It works!")
    }

    render() { 

        return (
            <div class="modal" tabindex="-1" id="groupModal">
                <div class="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <form justify-content="center">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <label for="group-changeName">Change your group's name</label>
                                                <input type="text" className="form-control" id="group-changeName"></input>    
                                            </div>
                                            <div className="input-group mb-3">
                                                <label for="group-addStudents">Add students</label>
                                                <input type="text" className="form-control" id="group-addStudents" onFocus={() => {this.showStudentList()}}></input>    
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}



 
export default connect(mapStateToProps, mapDispatchToProps)(GroupModal);


// const GroupModal = ({ handleClose, show, children }) => {

//     const showHideClassName = show ? "modal display-block" : "modal display-none";
  
//     return (
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           {children}
//           <button type="button" onClick={handleClose}>
//             Close
//           </button>
//         </section>
//       </div>
//     );
//   };

//   export default GroupModal