import React, { useState } from "react";
import ConsumptionType from "./ConsumptionType";

const ConsumptionForm = ({ getConsumptionFormData }) => {
  const [formState, setFormState] = useState({
    id: Math.random(), //임시
    name: "",
    cost: 0,
    type: null,
    date: new Date(),
    memo: "",
    repurchaseIntent: false,
  });
  const [isCheckedMemo, setIsCheckedMemo] = useState(false);

  const getConsumptionType = (selectTypeData) => {
    setFormState((prevState) => ({
      ...prevState,
      type: selectTypeData,
    }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    getConsumptionFormData(formState);

    setFormState({
      id: Math.random(), //임시
      name: "",
      cost: 0,
      type: null,
      date: new Date(),
      memo: "",
      repurchaseIntent: false,
    });
  };

  const inputNameHanlder = (event) => {
    console.log(event);

    setFormState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const inputCostHanlder = (event) => {
    console.log(event);
    setFormState((prevState) => ({
      ...prevState,
      cost: event.target.value,
    }));
  };
  const inputDateHanlder = (event) => {
    console.log(event);
    setFormState((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  //
  const inputCheckMemoHanlder = (event) => {
    console.log(event);

    !isCheckedMemo ? setIsCheckedMemo(true) : setIsCheckedMemo(false);
  };

  const inputEnterMemoHanlder = (event) => {
    console.log(event);
    setFormState((prevState) => ({
      ...prevState,
      memo: event.target.value,
    }));
  };
  const inputRepurchaseIntentHandler = (event) => {
    console.log(event);
    setFormState((prevState) => ({
      ...prevState,
      repurchaseIntent: event.target.value,
    }));
  };

  return (
    <form className="consumption-form" onSubmit={submitFormHandler}>
      <div className="consumption-form__field">
        <label for="name">이름</label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={inputNameHanlder}
          required
        />
      </div>

      <div className="consumption-form__field">
        <label for="cost">비용</label>
        <input
          type="number"
          id="cost"
          onChange={inputCostHanlder}
          value={formState.cost}
          required
        />
      </div>

      <div className="consumption-form__field">
        유형
        <ConsumptionType getConsumptionType={getConsumptionType} />
      </div>

      <div className="consumption-form__field">
        <label for="purchase-date">구입 날짜</label>
        <input
          type="date"
          id="purchase-date"
          onChange={inputDateHanlder}
          value={formState.date}
          required
        />
      </div>

      <div className="consumption-form__field" style={{ display: "flex" }}>
        <p>메모</p>
        <input
          type="checkbox"
          id="enter-memo"
          name=""
          onChange={inputCheckMemoHanlder}
        />

        {!isCheckedMemo ? (
          ""
        ) : (
          <>
            <label for="enter-memo">메모 작성</label>
            <input
              id="enter-memo"
              type="text"
              onChange={inputEnterMemoHanlder}
              disabled={!isCheckedMemo}
            />
          </>
        )}
      </div>

      <div className="consumption-form__field">
        <p>재구매 의사</p>
        <input
          type="radio"
          id="repurchase-yes"
          name="repurchase-intent"
          value="true"
          onChange={inputRepurchaseIntentHandler}
          required
        />
        <label for="">한다</label>
        <input
          type="radio"
          id="repurchase-no"
          name="repurchase-intent"
          value="false"
          onChange={inputRepurchaseIntentHandler}
          required
        />
        <label for="no">안한다</label>
      </div>

      <button type="submit">작성</button>
    </form>
  );
};

export default ConsumptionForm;
