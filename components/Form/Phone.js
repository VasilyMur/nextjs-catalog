class Phone extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value);
    }

    render() {
        return (
            <label> 
                Телефон
                <input  value={this.props.name}  type='text' placeholder='7-985-555-2233' name='phone' onChange={this.handleChange} required />
            </label>
        )
    }
}

export default Phone;