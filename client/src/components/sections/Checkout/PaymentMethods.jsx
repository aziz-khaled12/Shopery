import { useEffect, useState } from "react";
import RadioList from "../../ui/other/RadioList";

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (value) => {
    setSelectedMethod(prev => prev === value ? "" : value);
  };

  const paymentOptions = [
    {
      id: "cash",
      label: "Cash on Delivery",
      checked: selectedMethod === "cash",
    },
    { id: "paypal", label: "Paypal", checked: selectedMethod === "paypal" },
    { id: "amazon", label: "Amazon Pay", checked: selectedMethod === "amazon" },
  ];

  useEffect(() => {
    console.log(selectedMethod);
  }, [selectedMethod]);

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium mb-2">Payment Method</h2>
      <RadioList
        options={paymentOptions}
        onChange={handleChange}
        selected={selectedMethod}
      />
    </div>
  );
}
