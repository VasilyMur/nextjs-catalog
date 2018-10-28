class Description extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value);
    }

    render() {
        return (
            <label> 
                Описание
                <textarea  value={this.props.name}  type="text" placeholder='Description' name='description' onChange={this.handleChange} />
            </label>
        )
    }
}

export default Description;