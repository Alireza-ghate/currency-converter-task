type ConvertedAmountProps = {
  conversionType: string;
  convertedAmountToRial: number;
  convertedAmountToDollar: number;
};
function DisplayConvertedAmount({
  conversionType,
  convertedAmountToRial,
  convertedAmountToDollar,
}: ConvertedAmountProps) {
  return (
    <div className="form-row">
      <p className="label">مقدار نهایی:</p>
      <div className="space-x-3">
        <span className="font-bold text-2xl bg-white border rounded-md border-gray-300 px-2 py-1">
          {conversionType === "usd"
            ? convertedAmountToDollar
            : convertedAmountToRial}
        </span>
        <span>{conversionType === "usd" ? "دلار" : "ریال"}</span>
      </div>
    </div>
  );
}

export default DisplayConvertedAmount;
