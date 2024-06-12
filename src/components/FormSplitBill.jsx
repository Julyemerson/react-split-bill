import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill-value">💰 Bill Value</label>
      <input
        type="text"
        id="bill-value"
        name="bill-value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="your-expenses">🧍‍♂️ Your Expenses</label>
      <input
        type="text"
        id="your-expenses"
        name="your-expenses"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friend-expense">👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        id="friend-expense"
        name="friend-expense"
        disabled
        value={paidByFriend}
      />

      <label htmlFor="select-bill-payer">🤑 Who is paying the bill</label>
      <select
        name="select-bill-payer"
        id="select-bill-payer"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
