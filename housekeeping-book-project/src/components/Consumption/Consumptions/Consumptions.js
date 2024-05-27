import React, { useState } from "react";
import ConsumptionItem from "../ConsumptionItem/ConsumptionItem";

const Consumptions = (props) => {
  let consumptions = props.consumptions;
  const conditions = props.conditions;

  // 유형필터 ======================================
  if (conditions.type) {
    consumptions = consumptions.filter(
      (consumption) => consumption.type === conditions.type
    );
  }

  // 기간필터 =======================================
  // 조건문이 길어져서 상수로 따로 뻄
  const startDate = conditions.startDate;
  const endDate = conditions.endDate;

  console.log("date필터");

  console.log(startDate);
  console.log(endDate);
  if (startDate && endDate) {
    consumptions = consumptions.filter(
      (consumption) =>
        new Date(consumption.startDate) >= startDate &&
        new Date(consumption.endDate) <= endDate
    );
  } else if (startDate) {
    consumptions = consumptions.filter(
      (consumption) => new Date(consumption.startDate) >= startDate
    );
  } else if (endDate) {
    consumptions = consumptions.filter(
      (consumption) => new Date(consumption.endDate) <= endDate
    );
  }

  switch (conditions.sort) {
    case "cost-desc":
      consumptions.sort((a, b) => b.cost - a.cost);
      break;

    case "cost-asc":
      consumptions.sort((a, b) => a.cost - b.cost);
      break;

    case "date-desc" || "":
      consumptions.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;

    case "date-asc":
      consumptions.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <div>
      {consumptions.map((consumption) => (
        <ConsumptionItem consumption={consumption} key={consumption.id} />
      ))}
    </div>
  );
};
export default Consumptions;
