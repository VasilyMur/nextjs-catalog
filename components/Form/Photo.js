class Photo extends React.Component {

    handleChange = (e) => {   
        const value = e.target.files;
        this.props.handleChange(value);
    }

    render() {
        return (
            <label>
                Фото
                <input type="file"
                        name="file" 
                        accept="image/jpg, image/jpeg, image/png" 
                        onChange= {this.handleChange} required />
            </label>
        )
    }
}

export default Photo;