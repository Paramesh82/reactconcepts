import React,{useState} from 'react';

const Index = () => {
    const [show, setShow] = useState(true);
    const handleShow = () => setShow(!show);
    return (
        <div>
        <button onClick={handleShow}>{show? "hide" : "show"}</button> 
        {show && <p>Hello, World!</p>}    
        </div>);
};

export default Index;