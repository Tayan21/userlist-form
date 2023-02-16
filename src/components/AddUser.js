import React from 'react';


class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }

   render() {
    return(
        <form ref={(el) => this.miForm = el}>
            <input placeholder="Firstname" onChange={(e) => this.setState({first_name: e.target.value})} />
            <input placeholder="Lastname" onChange={(e) => this.setState({last_name: e.target.value})}/>
            <textarea placeholder="Bio" onChange={(e) => this.setState({email: e.target.value})}></textarea>
            <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})}/>
            <label htmlFor="isHappy" >You Happy?</label>
            <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
            <button type="button" onClick={() =>{
                this.miForm.reset();
                this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                }
                if (this.props.user) {
                    this.userAdd.id = this.props.user.id
                }
                this.props.onAdd(this.userAdd)}
            }>Add</button>
        </form>
    )
  }
}

export default AddUser