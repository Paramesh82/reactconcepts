import React, {useState} from 'react';

const Index = () => {
const initalArray = [
    {id: 1, name: "john" , age: 27},  
    // {id: 2, name: "peter", age: 35},
    // {id: 3, name: "susan", age: 24},
    // {id: 4, name: "anna",  age: 31},
]

const [people, setPeople] = useState(initalArray);

const changeName = () => {
    setPeople({...people, name: "bob"});
    console.log(people);
}

const setPeopleHandler = (id) => {
    console.log(id);
}

const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
}

    return (
        <div>
            <ul>
            {people && people.map && people.map((person)=>{
                const {id, name, age} = person;
                return <li key={id} className="item">{name} {age}
                <button onClick={() => changeName()}>Change Name</button>
                <button onClick={() => setPeopleHandler(id)}>Clear</button>
                <button onClick={() => removeItem(id)}>Clear</button>
                </li>
            })
            }
            </ul>
            
        </div>
    );
};

export default Index;