import { useState } from "react";
import RadioList from "../../ui/other/RadioList";

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState("cash");

  const handleChange = (value) => {
    setSelectedMethod(value);
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

  return (
    <div className="w-full">
        <h2 className="text-xl font-medium mb-2">Payment Method</h2>
        <RadioList
          options={paymentOptions}
          onChange={handleChange}
          name="payment"
        />
    </div>
  );
}
