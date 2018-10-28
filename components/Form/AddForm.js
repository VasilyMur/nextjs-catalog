import axios from 'axios';
import FormStyles from '../styles/FormStyles';
import Router from 'next/router';

import City from './City';
import Phone from './Phone';
import Name from './Name';
import Description from './Description';
import Url from './Url';
import Address from './Address';
import Hours from './Hours';

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
                        console.log(res);
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


    handleAddressChange = (value) => {
        const address = value
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


    handleChange = (name, value) => {  
        this.setState({ [name]: value })
     }

     handleScheduleChange = (value, name, index) => {
            if ( index === '0') {
                this.setState({ schedule: {...this.state.schedule, [`${name}`]: {...this.state.schedule[`${name}`], open: value }}})
            }
            if ( index === '1') {
                this.setState({ schedule: {...this.state.schedule, [`${name}`]: {...this.state.schedule[`${name}`], close: value }}})
            }    
    }


    render(){

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
            <FormStyles onSubmit={this.handleSubmit}>
                <fieldset>
                    <City name={this.state.city} handleChange={this.handleChange}/>
                    <Phone name={this.state.phone} handleChange={this.handleChange}/>
                    {this.state.errors.phone ? <span className="form__error">{this.state.errors.phone}</span> : ''}
                    <Name name={this.state.name} handleChange={this.handleChange}/>
                    <Description name={this.state.description} handleChange={this.handleChange}/>
                    <Url name={this.state.url} handleChange={this.handleChange}/>
                    <Address name={this.state.address} handleChange={this.handleAddressChange}/>

                    <fieldset>
                        <label>Часы Работы</label>
                        <div className="workHours">
                        { weekDays.map((res, i) => {
                            const open = this.state.schedule[`${res[0]}`] ? this.state.schedule[`${res[0]}`].open : '';
                            const close = this.state.schedule[`${res[0]}`] ? this.state.schedule[`${res[0]}`].close : '';

                            return <Hours handleChange={this.handleScheduleChange}
                                                    errors={this.state.errors}
                                                    key={i} 
                                                    day={res[1]} 
                                                    name={res[0]} 
                                                    open={open} 
                                                    close={close}/>
                                        }) }
                        </div>
                    </fieldset>

                    <button type="submit">Add</button>
                </fieldset>
            </FormStyles>
        )
    }
}



export default AddForm