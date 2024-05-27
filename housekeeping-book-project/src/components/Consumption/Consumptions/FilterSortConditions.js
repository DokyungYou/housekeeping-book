import React, { useState } from "react";
import ConsumptionType from "../../ConsumptionForm/ConsumptionType";
import Consumptions from "./Consumptions";

const FilterSortConditions = ({ consumptions }) => {
  const [filterSortState, setFilterSortState] = useState({
    type: null,
    sort: null,
    startDate: "",
    endDate: "",
  });

  const getConsumptionType = (typeData) => {
    setFilterSortState((prevState) => ({
      ...prevState,
      type: typeData,
    }));
  };

  const sortConditionHanlder = (event) => {
    setFilterSortState((prevState) => ({
      ...prevState,
      sort: event.target.value,
    }));
  };

  const sortStartDateHanlder = (event) => {
    setFilterSortState((prevState) => ({
      ...prevState,
      startDate: event.target.value,
    }));
  };
  const sortEndDateHanlder = (event) => {
    setFilterSortState((prevState) => ({
      ...prevState,
      endDate: event.target.value,
    }));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <ConsumptionType getConsumptionType={getConsumptionType} />
        </div>
        <div>
          <select
            name="sort-conditions"
            id="consumption-sort-conditions"
            onChange={sortConditionHanlder}
          >
            <option value="cost-desc">비용 높은 순</option>
            <option value="cost-asc">비용 낮은 순</option>
            <option value="date-desc">최신 순</option>
            <option value="date-asc">오래된 순</option>
          </select>
        </div>

        <div>
          <label for="start-date">시작 기간</label>
          <input type="date" id="start-date" onChange={sortStartDateHanlder} />

          <label for="end-date">끝 기간</label>
          <input type="date" id="end-date" onChange={sortEndDateHanlder} />
        </div>
      </div>
      <div>
        <Consumptions
          consumptions={consumptions}
          conditions={filterSortState}
        />
      </div>
    </>
  );
};

export default FilterSortConditions;
