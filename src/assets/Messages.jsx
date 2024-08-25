import React, { useState, useEffect } from 'react';

const Messages = () => {
    const [msg, setMsg] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    
    useEffect(() => {
        const savedMessages = localStorage.getItem('messages');
        if (savedMessages) {
            setMsg(JSON.parse(savedMessages));
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(msg));
    }, [msg]);

    
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'messages') {
                setMsg(JSON.parse(event.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleJoin = () => {
        if (name && message) {
            setMsg([...msg, { name, message }]);
            setName(''); 
            setMessage('');
        }
    };

    return (
        <div>
            <input 
                value={name} 
                onChange={changeName} 
                placeholder="Enter your name" 
            />
            <br></br>
            <input 
                value={message} 
                onChange={changeMessage} 
                placeholder="Enter your message" 
            />
            <br></br>
            <button onClick={handleJoin} style={{ marginTop: '30px',backgroundColor:'blue'}}>Join</button>
            {msg.map((ele, ind) => (
                <div key={ind}>
                    <p><strong>{ele.name}:</strong> {ele.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
