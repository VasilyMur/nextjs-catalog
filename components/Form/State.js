class State extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value.toLowerCase());
    }

    render() {
        return (
            <label> 
                State
                <input  value={this.props.name}  type="text" placeholder='State' name='state' onChange={this.handleChange} required />
            </label>
        )
    }
}

export default State;