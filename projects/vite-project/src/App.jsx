import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./index.css";

const users = [
  {
    username: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    username: "pheralb",
    name: "Pablo Heraldo",
    isFollowing: false,
  },
  {
    username: "PacoHdez",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    username: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ username, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={username}
            userName={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}

      {/* <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="pheralb">
        Pablo Heraldo
      </TwitterFollowCard> */}
    </section>
  );
}
