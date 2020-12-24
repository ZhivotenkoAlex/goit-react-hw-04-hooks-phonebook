import { useState} from 'react';
import shortid from 'shortid';
import s from './NameForm.module.css';

export default function Nameform({onSubmit}) {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

     const contact = { name, phone };
    
    const nameInputId = shortid.generate();
    const phoneInputId = shortid.generate();

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default: return;
        };
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(contact);

        setName('');
        setPhone('');
    };

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.container}>
                    <label className={s.label}>
                        Name
                            <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            id={nameInputId}
                        />
                    </label >
                    <label className={s.label}>
                        Phone
                             <input
                            type="text"
                            name='phone'
                            value={phone}
                            onChange={handleChange}
                            id={phoneInputId}
                        />
                    </label>
                        

                    <button className={s.button} type='submit'>Add contact</button>

                </div>
            </form>
        </>
    );


};



//  class NameForm extends Component{
//     state = {
//         name: '',
//         phone: '',
//         id:''
//     };

//     nameInputId = shortid.generate();
//     phoneInputId = shortid.generate();

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
        
//     };

//     handleSubmit = event => {
//         event.preventDefault();
       
//        this.props.onSubmit(this.state);

//         this.setState({ name: '', phone:''})

//     }

    
//     render() {
//         const { name, phone } = this.state;
//         return (
//             <>
//                 <form className={s.form } onSubmit={this.handleSubmit}>
//                 <div className={s.container}>
//                      <label className={s.label}>
//                             Name
//                             <input
//                                 type="text"
//                                 name='name'
//                                 value={name}
//                                 onChange={this.handleChange}
//                                 id={this.nameInputId}
//                             />
//                         </label >
//                         <label className={s.label}>
//                             Phone
//                              <input
//                                 type="text"
//                                 name='phone'
//                                 value={phone}
//                                 onChange={this.handleChange}
//                                 id={this.phoneInputId}
//                             />
//                         </label>
                        

//                      <button className={s.button} type='submit'>Add contact</button>

//                     </div>
//                     </form>
//             </>
//         )
//     }

// }

// export default NameForm;