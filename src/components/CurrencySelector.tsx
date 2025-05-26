type CurrencySelectorProps = {
  conversionType: string;
  setConversionType: (value: string) => void;
};

function CurrencySelector({
  conversionType,
  setConversionType,
}: CurrencySelectorProps) {
  return (
    <div className="form-row">
      <label className="label" htmlFor="currency">
        واحد تبدیل:
      </label>
      <select
        id="currency"
        className="bg-white px-1.5 py-0.5 rounded-md border border-gray-300 focus:outline-none"
        value={conversionType}
        onChange={(e) => setConversionType(e.target.value)}
      >
        <option value="usd">دلار</option>
        <option value="irr">ریال</option>
      </select>
    </div>
  );
}

export default CurrencySelector;
