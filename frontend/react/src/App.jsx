import UserProfile from "./UserProfile.jsx";

function App() {
    return (
        <div>
            <UserProfile
                name={"Jamila"}
                age={22}
                gender={"women"}
            />
            <UserProfile
                name={"Marco"}
                age={34}
                gender={"men"}
            />
        </div>
    )
}

export default App
