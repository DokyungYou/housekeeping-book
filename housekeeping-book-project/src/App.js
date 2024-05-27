import logo from "./logo.svg";
import "./App.css";
import ConsumptionForm from "./components/ConsumptionForm/ConsumptionForm";

import { useState } from "react";
import FilterSortConditions from "./components/Consumption/Consumptions/FilterSortConditions";

function App() {
  const [consumptions, setConsumption] = useState([
    //더미데이터
    {
      id: 1,
      name: "달걀 1판",
      cost: 6000,
      type: "식료품",
      date: "2023-01-01",
      memo: "",
      repurchaseIntent: "true",
    },
    {
      id: 2,
      name: "맥북",
      cost: 2000000,
      type: "전자기기",
      date: "2023-02-01",
      memo: "탕진.. 흑흑",
      repurchaseIntent: "false",
    },
    {
      id: 3,
      name: "후드티",
      cost: 40000,
      type: "의류",
      date: "2023-03-01",
      memo: "사진에 속았다",
      repurchaseIntent: "false",
    },
    {
      id: 4,
      name: "청소기",
      cost: 150000,
      type: "청소용품",
      date: "2023-04-05",
      memo: "새로 산 청소기",
      repurchaseIntent: "true",
    },
    {
      id: 5,
      name: "주방 칼",
      cost: 100000,
      type: "주방용품",
      date: "2023-05-20",
      memo: "고오급 주방칼, 비싼값 한다.ㄷㄷ",
      repurchaseIntent: "true",
    },
    {
      id: 6,
      name: "틴트",
      cost: 25000,
      type: "화장품",
      date: "2023-06-10",
      memo: "핑크 착색이 심하다",
      repurchaseIntent: "false",
    },
    {
      id: 7,
      name: "혼자 공부하는 자바스크립트",
      cost: 15000,
      type: "서적",
      date: "2023-07-12",
      memo: "",
      repurchaseIntent: "false",
    },
    {
      id: 8,
      name: "구충제",
      cost: 3000,
      type: "의약품",
      date: "2023-08-15",
      memo: "",
      repurchaseIntent: "true",
    },
    {
      id: 9,
      name: "에어프라이어",
      cost: 120000,
      type: "가전제품",
      date: "2023-09-18",
      memo: "",
      repurchaseIntent: "true",
    },
    {
      id: 10,
      name: "운동화",
      cost: 80000,
      type: "운동 용품",
      date: "2023-10-05",
      memo: "새로운 운동화",
      repurchaseIntent: "true",
    },
    {
      id: 11,
      name: "가죽 가방",
      cost: 150000,
      type: "가방 및 액세서리",
      date: "2023-11-20",
      memo: "튼튼해서 오래 잘 쓸 듯",
      repurchaseIntent: "false",
    },
    {
      id: 12,
      name: "세라마이드 앰플 8000",
      cost: 15000,
      type: "화장품",
      date: "2023-12-01",
      memo: "보습 미쳤다",
      repurchaseIntent: "true",
    },
    {
      id: 13,
      name: "닥터치카 고불소치약",
      cost: 9000,
      type: "의약품",
      date: "2023-12-10",
      memo: "이거 한달 정도 쓰니까 이시림 많이 개선됨",
      repurchaseIntent: "true",
    },
    {
      id: 14,
      name: "모션 데스크",
      cost: 150000,
      type: "가구",
      date: "2023-12-15",
      memo: "모션데스크치고 저렴해서인지.. 내구성이 영..",
      repurchaseIntent: "false",
    },
    {
      id: 15,
      name: "운동복",
      cost: 60000,
      type: "의류",
      date: "2023-12-20",
      memo: "좋다",
      repurchaseIntent: "true",
    },
    {
      id: 16,
      name: "헬스장 멤버십",
      cost: 80000,
      type: "여가 활동",
      date: "2024-01-01",
      memo: "1년치 등록",
      repurchaseIntent: "true",
    },
    {
      id: 17,
      name: "테니스 라켓",
      cost: 120000,
      type: "운동 용품",
      date: "2024-01-10",
      memo: "새로 시작한 테니스",
      repurchaseIntent: "true",
    },
    {
      id: 18,
      name: "러닝머신",
      cost: 500000,
      type: "운동 용품",
      date: "2024-02-01",
      memo: "집에서 운동하기",
      repurchaseIntent: "false",
    },
    {
      id: 19,
      name: "여행 가방",
      cost: 100000,
      type: "가방 및 액세서리",
      date: "2024-02-15",
      memo: "튼튼하고 크다",
      repurchaseIntent: "true",
    },
    {
      id: 20,
      name: "피아노",
      cost: 1000000,
      type: "여가 활동",
      date: "2024-03-01",
      memo: "취미로 시작한 피아노",
      repurchaseIntent: "true",
    },
  ]);

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
