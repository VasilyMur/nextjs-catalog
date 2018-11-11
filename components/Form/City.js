class City extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value);
    }

    render() {
        return (
            <label> 
                Город
                <select  value={this.props.name}  type='text' placeholder='Город' name='city' onChange={this.handleChange} required>
                <option value=""></option>
                <option value="moscow">Moscow</option>
                <option value="new-york">New York</option>
                </select>
            </label>
        )
    }
}

export default City