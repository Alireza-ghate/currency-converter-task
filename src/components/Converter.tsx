import { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import DisplayConvertedAmount from "./DisplayConvertedAmount";
import ExchangeRateInput from "./ExchangeRateInput";
import InputAmount from "./InputAmount";

function Converter() {
  const [amount, setAmount] = useState(0);
  const [conversionType, setConversionType] = useState("usd");
  const [exchangeRate, setExchangeRate] = useState(0);
  //compute converted amount based on conversion type:
  const convertedAmountToDollar =
    exchangeRate === 0 ? 0 : Number((amount / exchangeRate).toFixed(2));
  const convertedAmountToRial = amount * exchangeRate;

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-md w-full max-w-[500px] min-w-[300px] mx-auto px-3 py-6">
      <form>
        <InputAmount
          amount={amount}
          setAmount={setAmount}
          conversionType={conversionType}
        />
        <CurrencySelector
          conversionType={conversionType}
          setConversionType={setConversionType}
        />
        <ExchangeRateInput
          exchangeRate={exchangeRate}
          setExchangeRate={setExchangeRate}
        />
        <DisplayConvertedAmount
          conversionType={conversionType}
          convertedAmountToRial={convertedAmountToRial}
          convertedAmountToDollar={convertedAmountToDollar}
        />
      </form>
    </div>
  );
}

export default Converter;
