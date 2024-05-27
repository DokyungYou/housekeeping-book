import logo from "./logo.svg";
import "./App.css";
import ConsumptionForm from "./components/ConsumptionForm/ConsumptionForm";

import { useState } from "react";
import FilterSortConditions from "./components/Consumption/Consumptions/FilterSortConditions";

function App() {
  const [consumptions, setConsumption] = useState([]);

  const getConsumptionFormData = (formData) => {
    setConsumption([
      {
        id: formData.id, //임시
        name: formData.name,
        cost: formData.cost,
        type: formData.type,
        date: formData.date,
        memo: formData.memo,
        repurchaseIntent: formData.repurchaseIntent,
      },
      ...consumptions,
    ]);

    console.log(consumptions);
  };

  return (
    <>
      <ConsumptionForm getConsumptionFormData={getConsumptionFormData} />
      <FilterSortConditions consumptions={consumptions} />
    </>
  );
}

export default App;
