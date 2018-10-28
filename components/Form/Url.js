class Url extends React.Component {

    handleChange = (e) => {   
        const value = e.target.value;
        const name = e.target.name;
        this.props.handleChange(name, value);
    }

    render() {
        return (
            <label>
                Сайт
                <input  value={this.props.name}  type='url' placeholder="http://hello.ru" name="url" onChange={this.handleChange} />
            </label>
        )
    }
}

export default Url;