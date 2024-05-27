import React, { useState } from "react";

const ConsumptionType = ({ getConsumptionType }) => {
  // const [selectType, setSelectType] = useState();

  const selectTypeHanlder = (event) => {
    console.log(event.target.value);
    getConsumptionType(event.target.value);
  };

  return (
    <select
      name="consumption-type"
      id="consumption-type"
      onChange={selectTypeHanlder}
      required
    >
      <option value="">소비 유형</option>
      <option value="groceries">식료품</option>
      <option value="snacks">식사 외 식품</option>
      <option value="cleaning-supplies">청소용품</option>
      <option value="kitchenware">주방용품</option>
      <option value="clothing">의류</option>
      <option value="electronics">전자기기</option>
      <option value="cosmetics">화장품</option>
      <option value="books">서적</option>
      <option value="medications">의약품</option>
      <option value="appliances">가전제품</option>
      <option value="furniture">가구</option>
      <option value="health-products">건강 관련 제품</option>
      <option value="leisure-activities">여가 활동</option>
      <option value="exercise-equipment">운동 용품</option>
      <option value="bags-and-accessories">가방 및 액세서리</option>
    </select>
  );
};
export default ConsumptionType;
