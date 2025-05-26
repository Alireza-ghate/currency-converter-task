import { useState } from "react";
import Input from "./Input";

function InputAmount() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="form-row">
      <label className="label" htmlFor="inputAmount">
        مقدار ورودی:
      </label>
      <div className="space-x-3">
        <Input
          id="inputAmount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          min={0}
          step={1000}
        />
        {/* <span>{conversionType === "usd" ? "ریال" : "دلار"}</span> */}
      </div>
    </div>
  );
}

export default InputAmount;
