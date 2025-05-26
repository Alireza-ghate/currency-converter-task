import Input from "./Input";

type ExchangeRateInputProps = {
  exchangeRate: number;
  setExchangeRate: (value: number) => void;
};

function ExchangeRateInput({
  exchangeRate,
  setExchangeRate,
}: ExchangeRateInputProps) {
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
