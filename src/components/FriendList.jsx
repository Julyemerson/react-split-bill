import { initialFriends as friends } from "../data";
import Friend from "./Friend";

export default function FriendList() {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
