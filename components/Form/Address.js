class Address extends React.Component {

    handleChange = (e) => {   
        const address = e.target.value;
        this.props.handleChange(address);
    }

    render() {
        return (
            <label>
                Address
                <input 
                    id="autocomplete"
                    placeholder="Введите адрес" 
                    name='address' 
                    onChange={this.handleChange}
                    value={this.props.name} required/>
            </label>
        )
    }
}

export default Address;