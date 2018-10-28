class Name extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value);
    }

    render() {
        return (
            <label> 
                Название
                <input  value={this.props.name}  type="text" placeholder='Name' name='name' onChange={this.handleChange} />
            </label>
        )
    }
}

export default Name;