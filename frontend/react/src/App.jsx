import UserProfile from "./UserProfile.jsx";

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
    return (
        <UserProfiles users={users}/>
    )
}

export default App
