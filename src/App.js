// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop
import Title from "./Components/Title";
import UserCard from "./Components/UserCard";
export default function App() {
  return (
    <div>
      <Title />
      <UserCard
        name="Chrisse"
        avatar="https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG"
        posts="1841"
        followers="66868"
        address="4018 Sachs Trail"
      />
    </div>
  );
}
