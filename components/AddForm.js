import styled from 'styled-components';
import Head from 'next/head';



import FormStyles from './styles/FormStyles';


class AddForm extends React.Component {
    
    state = {
        city: '',
        name: '',
        description: '',
        phone: '',
        url: '',
        schedule: {},
        address: '',
        lng: '',
        lat: '',
        errors: {}
    }

    validateHourStart = () => {
        let hourStart = this.state.hourStart

        let errors = {}
        let formIsValid = true;
        
        const regex = new RegExp(/^\d{2}\:\d{2}$/i);

        if (!regex.test(hourStart)) {
            formIsValid = false;
            errors['hourStart'] = '* Введите часы в указанном формате!'
        } else {
            formIsValid = true;
        }

        this.setState({errors: errors});
        return formIsValid;

    }

    validateHourEnd = () => {
        let hourEnd = this.state.hourEnd
        let errors = {}
        let formIsValid = true;
        
        const regex = new RegExp(/^\d{2}\:\d{2}$/i);

        if (!regex.test(hourEnd)) {
            formIsValid = false;
            errors['hourEnd'] = '* Введите часы в указанном формате!'
        } else {
            formIsValid = true;
        }

        this.setState({errors: errors});
        return formIsValid;

    }

    validatePhone = () => {
        let phone = this.state.phone
        let errors = {}
        let formIsValid = true;

        const regex = new RegExp(/\d{1}-\d{3}-\d{3}-\d{4}/i);
        if (!regex.test(phone)) {
            formIsValid = false;
            errors['phone'] = '* Введите телефон в указанном формате!'
        } else {
            formIsValid = true;
        }
    
        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            city: this.state.city,
            name: this.state.name,
            description: this.state.description,
            phone: this.state.phone,
            url: this.state.url,
            days: this.state.days,
            address: this.state.address,
            lat: this.state.lat,
            lng: this.state.lng
        }

        console.log(item)

        if (!this.validateHourStart() || !this.validateHourEnd() || !this.validatePhone()) {
            console.log('submit error')

        } else {
            console.log('all correct!!')
            // axios.post('/api/items/create', item).then(res => {
            //     console.log(res)
            // }).catch((err) => {
            //     console.log(err)
            // })
            this.setState({ city: '', name: '', description: '', phone: '', url: '', days: [], address: '', lat: '', lng: '' });
        }

    }

    handleChange = (e) => {   
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        if (e.target.type !== 'checkbox') {
            this.setState({ [name]: value })
        } else {
            console.log(name)
            if (value !== true) {
                const index = this.state.days.indexOf(name); 
                this.setState({ days: [...this.state.days.slice(0, index), ...this.state.days.slice(index + 1)]})
            } else {
                this.setState({days : [...this.state.days, name]})
            }
        }    
    }

    handleAddressChange = (e) => {
        const address = e.target.value
        const dropdown = new google.maps.places.Autocomplete(document.getElementById('autocomplete'))
        dropdown.addListener('place_changed', () => {
            const place = dropdown.getPlace();
            const address = place.formatted_address
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()
            
            this.setState({ address, lat, lng })
        });
        this.setState({ address })
    }

    handleScheduleChange = (e) => {
        const time = e.target.value;
        console.log(time)
    }



    render(){


        const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        return (
            <React.Fragment>
            <FormStyles onSubmit={this.handleSubmit}>
                <fieldset>

                        <label> Город
                             <select  value={this.state.city}  type='text' placeholder='Город' name='city' onChange={this.handleChange} required>
                                <option value=""></option>
                                <option value="moscow">Москва</option>
                                <option value="saint-petersburg">Санкт-Петербург</option>
                             </select>
                        </label>

                        <label> Телефон
                            <input  value={this.state.phone}  type='text' placeholder='7-985-555-2233' name='phone' onChange={this.handleChange} required />
                            {this.state.errors.phone ? <span className="form__error">{this.state.errors.phone}</span> : ''}
                        </label>


                        <label> Name
                             {/* <input  value={this.state[res]}  name={res} onChange={this.handleChange}required/> */}
                             <input  value={this.state.name}  type="text" placeholder='Name' name='name' onChange={this.handleChange} />
                        </label>

                        <label> Description
                             {/* <input  value={this.state[res]}  name={res} onChange={this.handleChange}required/> */}
                             <textarea  value={this.state.description}  type="text" placeholder='Description' name='description' onChange={this.handleChange} />
                        </label>
                

                        <label> Website
                             {/* <input  value={this.state[res]}  name={res} onChange={this.handleChange}required/> */}
                             <input  value={this.state.url}  type='url' placeholder="http://hello.ru" name="url" onChange={this.handleChange} />
                        </label>
                   

                    <label>
                        Address
                        <input 
                            id="autocomplete"
                            placeholder="Введите адрес" 
                            name='address' 
                            onChange={this.handleAddressChange}
                            value={this.state.address}/>
                    </label>
                        

                    <label>Часы Работы</label>
                    <div className="workHours">
                        {weekDays.map((res, i) => {

                            return <label key={i}> 
                            {res}
                            <input key={i} 
                                    type="text" 
                                    name={`${res}Open`} 
                                    placeholder='Open'
                                    onChange={this.handleScheduleChange} />
                            <input key={i + 1} 
                                    type="text" 
                                    name={`${res}Close`} 
                                    placeholder='Close'
                                    onChange={this.handleScheduleChange} />
                            </label>
                        })}    
                    </div>
                    <button type="submit">Add</button>
                </fieldset>
            </FormStyles>
            </React.Fragment>
        )
    }
}



export default AddForm