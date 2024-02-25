import UserProfile from "./UserProfile.jsx";

function App() {
    return (
        <div>
            <UserProfile
                name={"Jamila"}
                age={22}
                gender={"women"}>
                <p>Hello</p>
            </UserProfile>
            <UserProfile
                name={"Marco"}
                age={34}
                gender={"men"}>
                <h1>Ciao</h1>
            </UserProfile>
        </div>
    )
}

export default App
