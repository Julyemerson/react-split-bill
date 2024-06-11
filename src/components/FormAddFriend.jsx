import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👫 Friend Name</label>
      <input type="text" id="friend-name" name="friend-name" />
      <label htmlFor="img-url">🌄 Image URL</label>
      <input type="text" id="image-url" name="image-url" />
      <Button>Add</Button>
    </form>
  );
}
