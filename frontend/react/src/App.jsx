import UserProfile from "./UserProfile.jsx";
import { useState, useEffect } from 'react';

const users = [
    {
        name: "Jamilla",
        age: 22,
        gender: "FEMALE"
    },
    {
        name: "Anna",
        age: 45,
        gender: "FEMALE"
    },
    {
        name: "Alex",
        age: 18,
        gender: "MALE"
    },
    {
        name: "Bilal",
        age: 27,
        gender: "MALE"
    },
]

const UserProfiles = ({ users }) => (
    <div>
        {users.map((user, index) => (
            <UserProfile
                key={index}
                name={user.name}
                age={user.age}
                gender={user.gender}
                imageNumber={index}
            />
        ))}
    </div>
)

function App() {

    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 4000)
        return () => {
            console.log("cleanup function")
        }
    }, [])

    if (isLoading) {
        return "loading...";
    }

    return (
        <div>
            <button
                onClick={() => setCounter(prevCounter => prevCounter + 2)}>
                Increment counter
            </button>
            <h1>{counter}</h1>
            <UserProfiles users={users}/>
        </div>
    )
}

export default App
