import React from "react";
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("all fields are required!");
            return;
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"",email:""}); // reset the form
        console.log(this.state);
    }
    
    render(){
        return(
            <div className="ui main">
                <div className="ui container">
                    <h2>Add Contact</h2>
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})} />
                            
                        </div>
                        <div className="field">
                            <label>email</label>
                            <input type="text" name="email" placeholder="email"  value={this.state.email} onChange={(e) => this.setState({email:e.target.value})} />

                        </div>
                        <button className="ui button primary">Add</button>
                    </form>
                </div>

            </div>
        );
    }
}
export  default AddContact; 