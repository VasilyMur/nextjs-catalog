import axios from 'axios';
import FormStyles from './styles/FormStyles';
import Router from 'next/router';

class AddForm extends React.Component {

    state = {
        city: this.props.item && this.props.item.city || '',
        name: this.props.item && this.props.item.name || '',
        description: this.props.item && this.props.item.description || '',
        phone: this.props.item && this.props.item.phone || '',
        url:  this.props.item && this.props.item.url || '',
        schedule: this.props.item && this.props.item.schedule || {},
        address: this.props.item && this.props.item.address || '',
        lng: this.props.item && this.props.item.lng || '',
        lat:  this.props.item && this.props.item.lat || '',
        errors: {}
    }

    handleScheduleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const index = e.target.attributes[0].value;

            if ( index === '0') {
                this.setState({ schedule: {...this.state.schedule, [`${name}`]: {...this.state.schedule[`${name}`], open: value }}})
            }
            if ( index === '1') {
                this.setState({ schedule: {...this.state.schedule, [`${name}`]: {...this.state.schedule[`${name}`], close: value }}})
            }    

    }


    validateHours = () => {
        let days = this.state.schedule;
        let errors = {};
        let formIsValid = true;
        const regex = new RegExp(/^\d{2}\:\d{2}$/i);

        Object.entries(days).map((res, i) => {
            if (!regex.test(res[1].open) || !regex.test(res[1].close)) {
                formIsValid = false;
                errors[`${res[0]}`] = '* Введите часы в указанном формате!'
            }
       
        })
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

    handleSubmit = async (e) => {
        e.preventDefault();
        const item = {
            city: this.state.city,
            name: this.state.name,
            description: this.state.description,
            phone: this.state.phone,
            url: this.state.url,
            schedule: this.state.schedule,
            location: {
                coordinates: [this.state.lng, this.state.lat],
                address: this.state.address
            }
        }

        console.log(item)

        if (  !this.validatePhone() || !this.validateHours() ) {
            console.log('submit error')
 
        } else {
            if (this.props.item) {
                try {
                    console.log('all correct!! --- UPDATING!')
                    await axios.post(`/api/items/update/${this.props.id}`, item).then(res => {
                        console.log(res)
                    }).catch((err) => {
                        console.log(err)
                    })
                    this.setState({ city: '', name: '', description: '', phone: '', url: '', schedule: {}, address: '', lat: '', lng: '' });
    
                    const id = this.props.item.slug;
                    Router.push({
                        pathname: '/item', query: {id: id}
                    },  '/update/'+id);
                    
                } catch(err) {
                    console.log(err)
                }


            } else {
                console.log('all correct!!')
                axios.post('/api/items/create', item).then(res => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
                this.setState({ city: '', name: '', description: '', phone: '', url: '', schedule: {}, address: '', lat: '', lng: '' });
            }
        }
    }

    handleChange = (e) => {   
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value })
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




    render(){


        //const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        const weekDays = [
            ['monday', 'Понедельник'], 
            ['tuesday', 'Вторник'], 
            ['wednesday', 'Среда'], 
            ['thursday', 'Четверг'], 
            ['friday', 'Пятница'], 
            ['saturday', 'Суббота'], 
            ['sunday', 'Воскресение']
        ]

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
                            <input  value={this.state.name}  type="text" placeholder='Name' name='name' onChange={this.handleChange} />
                    </label>

                    <label> Description
                            <textarea  value={this.state.description}  type="text" placeholder='Description' name='description' onChange={this.handleChange} />
                    </label>
            

                    <label> Website
                            <input  value={this.state.url}  type='url' placeholder="http://hello.ru" name="url" onChange={this.handleChange} />
                    </label>
                   

                    <label>
                        Address
                        <input 
                            id="autocomplete"
                            placeholder="Введите адрес" 
                            name='address' 
                            onChange={this.handleAddressChange}
                            value={this.state.address} required/>
                    </label>
                        
                    <fieldset>
                        <label>Часы Работы</label>
                        <div className="workHours">
                            {weekDays.map((res, i) => {

                               const open = this.state.schedule[`${res[0]}`] ? this.state.schedule[`${res[0]}`].open : ''
                               const close = this.state.schedule[`${res[0]}`] ? this.state.schedule[`${res[0]}`].close : ''
                               
                                return <label key={i}> 
                                {res[1]}
                                <input 
                                    index={0}
                                    type="text" 
                                    name={res[0]}
                                    placeholder='08:00'
                                    value={open || ''}
                                    onChange={this.handleScheduleChange} required />
                                <input 
                                    index={1}
                                    type="text" 
                                    name={res[0]}
                                    placeholder='20:00'
                                    value={close || ''}
                                    onChange={this.handleScheduleChange} required />
                                    {this.state.errors[`${res[0]}`] ? <span className="form__error">{this.state.errors[`${res[0]}`]}</span> : ''}
                                </label>
                            })}    
                        </div>
                    </fieldset>

                    <button type="submit">Add</button>
                </fieldset>
            </FormStyles>
            </React.Fragment>
        )
    }
}



export default AddForm