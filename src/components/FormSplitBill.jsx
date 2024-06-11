import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with |FRIEND-NAME|</h2>

      <label htmlFor="bill-value">💰 Bill Value</label>
      <input type="text" id="bill-value" name="bill-value" />

      <label htmlFor="your-expenses">🧍‍♂️ Your Expenses</label>
      <input type="text" id="your-expenses" name="your-expenses" />

      <label htmlFor="friend-expense">👫 X</label>
      <input type="text" id="friend-expense" name="friend-expense" disabled />

      <label htmlFor="select-bill-payer">🤑 Who is paying the bill</label>
      <select name="select-bill-payer" id="select-bill-payer">
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
