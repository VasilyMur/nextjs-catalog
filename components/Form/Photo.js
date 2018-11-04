class Photo extends React.Component {


    handleChange = (e) => {   
        const value = e.target.files;
        this.props.handleChange(value);
    }

    render() {
        const required = this.props.photo ? false : true;
        return (
            
            <label>
                Фото
                <input type="file"
                        name="file" 
                        accept="image/jpg, image/jpeg, image/png" 
                        onChange= {this.handleChange} 
                        required={required}
                        />

            </label>
        )
    }
}

export default Photo;