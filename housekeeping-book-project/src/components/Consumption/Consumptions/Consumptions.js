import React, { useState } from "react";
import ConsumptionItem from "../ConsumptionItem/ConsumptionItem";

const Consumptions = (props) => {
  let consumptions = props.consumptions;
  const conditions = props.conditions;

  // 나중에 수정하면서 다른 곳에 둘 것 같음
  const headers = [
    { name: "이름", value: "name" },
    { name: "비용", value: "cost" },
    { name: "유형", value: "type" },
    { name: "구입날짜", value: "date" },
    { name: "메모내용", value: "memo" },
    { name: "재구매의사", value: "repurchaseIntent" },
  ];

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

  // 기본 랜더링
  // return (
  //   <div>
  //     {consumptions.map((consumption) => (
  //       <ConsumptionItem consumption={consumption} key={consumption.id} />
  //     ))}
  //   </div>
  // );

  const headerValues = headers.map((header) => header.value);

  // 테이블로 랜더링
  // 스타일은 임시로 inline으로 적용 (선만 넣음)
  return (
    <table>
      <thead>
        {headers.map((header) => (
          <th style={{ border: "1px solid black", padding: "8px" }}>
            {header.name}
          </th>
        ))}
      </thead>
      <tbody>
        {consumptions.map((consumption) => (
          <tr>
            {headerValues.map((headerValue) => (
              // 객체의 속성에 변수로 접근 시엔 []사용
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {consumption[headerValue]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Consumptions;

// {
//   id: formData.id, //임시
//   name: formData.name,
//   cost: formData.cost,
//   type: formData.type,
//   date: formData.date,
//   memo: formData.memo,
//   repurchaseIntent: formData.repurchaseIntent,
// },
