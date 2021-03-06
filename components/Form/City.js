class City extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value.toLowerCase());
    }

    render() {
        return (
            <label> 
                City
                <input value={this.props.name}  type='text' placeholder='City' name='city' onChange={this.handleChange} required />
            </label>
        )
    }
}

export default City;