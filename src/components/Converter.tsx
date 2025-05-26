import CurrencySelector from "./CurrencySelector";
import ExchangeRateInput from "./ExchangeRateInput";
import InputAmount from "./InputAmount";

function Converter() {
  //compute converted amount based on conversion type:
  // const convertedAmountToDollar =
  //   exchangeRate === 0 ? 0 : Number((amount / exchangeRate).toFixed(2));
  // const convertedAmountToRial = amount * exchangeRate;
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-md w-full max-w-[500px] min-w-[300px] mx-auto px-3 py-6">
      <form>
        <InputAmount />
        <CurrencySelector />
        <ExchangeRateInput />
      </form>
    </div>
  );
}

export default Converter;
