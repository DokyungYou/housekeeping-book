import React from "react";
import ConsumptionDate from "../Consumptions/ConsumptionDate";

const ConsumptionItem = ({ consumption }) => {
  // id: Math.random(), //임시
  // name: "",
  // cost: 0,
  // type: null,
  // date: new Date(),
  // memo: "",
  // repurchaseIntent: false,

  //이름 | 가격 | 구매날짜 | 유형 | 재구매의사 | 메모 |
  // date는 그냥 바로 출력 못함, 에러메시지

  // const dateFormat = new Intl.DateTimeFormat("en-US");

  // const formatedDate = new Intl.DateTimeFormat("en-US").format(
  //   consumption.date
  // );
  return (
    <div style={{ display: "flex" }}>
      <div>{consumption.name}</div>
      <div>{consumption.cost}</div>
      <div>{consumption.type}</div>
      <div>
        {/* {dateFormat.format(consumption.date)}> */}
        {/* <ConsumptionDate date={consumption.date} /> */}
        {/* {formatedDate} */}
        {consumption.date.toString()}
      </div>

      <div>{consumption.memo}</div>
      <div>{consumption.repurchaseIntent}</div>
    </div>
  );
};

export default ConsumptionItem;
