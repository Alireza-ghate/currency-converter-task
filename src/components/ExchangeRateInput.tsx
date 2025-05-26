import { useState } from "react";
import Input from "./Input";

function ExchangeRateInput() {
  const [exchangeRate, setExchangeRate] = useState(0);
  return (
    <div className="form-row">
      <label className="label" htmlFor="rateInput">
        نرخ هر واحد دلار:
      </label>
      <div className="space-x-3">
        <Input
          id="rateInput"
          value={exchangeRate}
          onChange={(e) => setExchangeRate(Number(e.target.value))}
          type="number"
          step={1000}
          min={0}
        />
        <span>ریال</span>
      </div>
    </div>
  );
}

export default ExchangeRateInput;
