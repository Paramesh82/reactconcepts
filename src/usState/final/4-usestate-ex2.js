import React, {useState} from 'react';

const Index = () => {
    const [firstName, setStateFirstName] = useState('');
    const [lastName, setStateLastName] = useState('');
    const [password, setStatePassword] = useState('');

    // const setFirstName = (e) => {
    //     //console.log(e);
    //     setStateFirstName(e.target.value);
    // }

    // const setLastName = (e) => { 
    //     setStateLastName(e.target.value);
    // }

    // const setPassword = (e) => {    
    //     setStatePassword(e.target.value);
    // }

    const handleInputChange = (e, name) => {
        console.log(e.target.value, name);
        if(name === 'firstName') {
            setStateFirstName(e.target.value);
        } else if(name === 'lastName') {
            setStateLastName(e.target.value);
        } else if(name === 'password') {
            setStatePassword(e.target.value);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <input type="text" value={firstName} onChange={(e) => handleInputChange(e, 'firstName')} placeholder="First Name" />
            <input type="text" value={lastName} onChange={(e) => handleInputChange(e, 'lastName')} placeholder="Last Name" />
            <input type="password" value={password} onChange={(e) => handleInputChange(e, 'password')} placeholder="Password" />
        </div>
        <div>
            <button onClick={() => console.log(firstName, lastName, password)}>Submit</button>  
        </div>
        </form>
    </div>

    );
}

export default Index;