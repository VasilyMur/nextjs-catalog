class Hours extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        const index = e.target.attributes[0].value;
        this.props.handleChange(value, name, index);
    }

    render() {
        const { name, day, open, close, errors } = this.props;
        return (
                <label > 
                    {day}
                    <input 
                        index={0}
                        type="text" 
                        name={name}
                        placeholder='08:00'
                        value={open || ''}
                        onChange={this.handleChange} required />
                    <input 
                        index={1}
                        type="text" 
                        name={name}
                        placeholder='20:00'
                        value={close || ''}
                        onChange={this.handleChange} required />
                        {errors[`${name}`] ? <span className="form__error">{errors[`${name}`]}</span> : ''}
                </label>
        )
    }
}

export default Hours;