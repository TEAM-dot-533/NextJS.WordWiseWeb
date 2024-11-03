"use client";

import React, { useState } from 'react';

export default function MyPaymentPage() {
    return (
<div className="w-[1920px] h-[1906px] relative bg-white">
  <p className="absolute left-[380px] top-[100px] text-[40px] font-bold text-left text-[#383838]">
    마이페이지
  </p>
  <div className="w-[1120px] h-[352px]">
    <div className="w-[1120px] h-[303px] absolute left-[399px] top-[230px] rounded-[20px] bg-white border-2 border-black" />
    <p className="w-[123px] absolute left-[430px] top-[260px] text-xl font-bold text-left text-[#383838]">
      멤버십 정보
    </p>
    <p className="absolute left-[577px] top-[260px] text-lg text-left text-[#383838]">FREE</p>
    <div className="flex justify-center items-center absolute left-[631px] top-[258px] gap-2.5 px-[15px] py-[7px] rounded-[15px] bg-white border-2 border-[#eee]">
      <p className="flex-grow-0 flex-shrink-0 text-sm text-right text-[#383838]">Upgrade</p>
    </div>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[375.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[307.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[985.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <p className="w-[123px] absolute left-[430px] top-[396px] text-xl font-bold text-left text-[#383838]">
      결제 수단
    </p>
    <p className="w-[123px] absolute left-[430px] top-[328px] text-xl font-bold text-left text-[#383838]">
      다음 결제일
    </p>
    <p className="absolute left-[401px] top-[182px] text-xl font-bold text-left text-[#b3b3b3]">
      결제 관리
    </p>
    <div className="flex flex-col justify-start items-start absolute left-[1385px] top-[474px] gap-2.5">
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-[30px] py-2 rounded-lg bg-[#336690] border-2 border-[#333236]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-right text-white/90">
          구독관리
        </p>
      </div>
    </div>
    <p className="absolute left-[577px] top-[328px] text-lg text-left text-[#383838]">2025.12.31</p>
    <p className="absolute left-[577px] top-[396px] text-lg text-left text-[#383838]">-</p>
  </div>
  <div className="w-[1120px] h-[580px]">
    <div className="w-[1120px] h-[532px] absolute left-[399px] top-[631px] rounded-[20px] bg-white border-2 border-black" />
    <p className="w-[123px] absolute left-[430px] top-[662px] text-xl font-bold text-left text-[#383838]">
      결제일
    </p>
    <p className="w-[123px] absolute left-[577px] top-[662px] text-xl font-bold text-left text-[#383838]">
      사용 기간
    </p>
    <p className="w-[97px] absolute left-[1074px] top-[662px] text-xl font-bold text-left text-[#383838]">
      할인 금액
    </p>
    <p className="w-[97px] absolute left-[874px] top-[662px] text-xl font-bold text-left text-[#383838]">
      기존 금액
    </p>
    <p className="w-[97px] absolute left-[1268px] top-[662px] text-xl font-bold text-left text-[#383838]">
      총 결제금액
    </p>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[777.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[845.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[913.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-981.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[1049.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[709.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <p className="w-[97px] absolute left-[430px] top-[732px] text-base text-left text-[#383838]">
      2024-06-28
    </p>
    <p className="w-[97px] absolute left-[430px] top-[800px] text-base text-left text-[#383838]">
      2024-05-28
    </p>
    <p className="w-[97px] absolute left-[430px] top-[868px] text-base text-left text-[#383838]">
      2024-04-28
    </p>
    <p className="w-[97px] absolute left-[430px] top-[936px] text-base text-left text-[#383838]">
      2024-01-28
    </p>
    <p className="w-[97px] absolute left-[430px] top-[1004px] text-base text-left text-[#383838]">
      2024-01-24
    </p>
    <p className="w-[470px] absolute left-[577px] top-[732px] text-base text-left text-[#383838]">
      24.06.28 - 24.07.28
    </p>
    <p className="w-[470px] absolute left-[577px] top-[800px] text-base text-left text-[#383838]">
      24.06.28 - 24.07.28
    </p>
    <p className="w-[470px] absolute left-[577px] top-[868px] text-base text-left text-[#383838]">
      24.06.28 - 24.07.28
    </p>
    <p className="w-[470px] absolute left-[577px] top-[936px] text-base text-left text-[#383838]">
      24.06.28 - 24.07.28
    </p>
    <p className="w-[470px] absolute left-[577px] top-[1004px] text-base text-left text-[#383838]">
      24.06.28 - 24.07.28
    </p>
    <svg
      width={48}
      height={54}
      viewBox="0 0 48 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-[54px] absolute left-[815px] top-[1080px]"
      preserveAspectRatio="none"
    >
      <rect y={4} width={48} height={50} rx={15} fill="black" />
      <rect
        x={1}
        y={1}
        width={46}
        height={48}
        rx={14}
        fill="white"
        stroke="black"
        stroke-width={2}
      />
      <path
        d="M19.825 26L25.425 31.6L24 33L16 25L24 17L25.425 18.4L19.825 24H32V26H19.825Z"
        fill="#1D1B20"
      />
    </svg>
    <svg
      width={48}
      height={54}
      viewBox="0 0 48 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-[54px] absolute left-[1057px] top-[1080px]"
      preserveAspectRatio="none"
    >
      <rect y={4} width={48} height={50} rx={15} fill="black" />
      <rect
        x={1}
        y={1}
        width={46}
        height={48}
        rx={14}
        fill="white"
        stroke="black"
        stroke-width={2}
      />
      <path
        d="M28.175 26H16V24H28.175L22.575 18.4L24 17L32 25L24 33L22.575 31.6L28.175 26Z"
        fill="#1D1B20"
      />
    </svg>
    <p className="absolute left-[893px] top-[1093px] text-lg text-center text-[#383838]">1</p>
    <p className="absolute left-[921px] top-[1093px] text-lg text-center text-[#b3b3b3]">2</p>
    <p className="absolute left-[952px] top-[1093px] text-lg text-center text-[#b3b3b3]">3</p>
    <p className="absolute left-[984px] top-[1093px] text-lg text-center text-[#b3b3b3]">4</p>
    <p className="absolute left-[1016px] top-[1093px] text-lg text-center text-[#b3b3b3]">5</p>
    <p className="w-[147px] absolute left-[1073px] top-[732px] text-base text-left">
      <span className="w-[147px] text-base text-left text-[#383838]">-3,900 (</span>
      <span className="w-[147px] text-base text-left text-[#336690]">쿠폰 적용가)</span>
    </p>
    <p className="w-[74px] absolute left-[873px] top-[732px] text-base text-left text-[#383838]">
      5,800
    </p>
    <p className="w-[74px] absolute left-[1269px] top-[732px] text-base text-left text-[#383838]">
      1,900
    </p>
    <p className="w-[74px] absolute left-[1269px] top-[800px] text-base text-left text-[#383838]">
      1,900
    </p>
    <p className="w-[74px] absolute left-[1269px] top-[868px] text-base text-left text-[#383838]">
      1,900
    </p>
    <p className="w-[74px] absolute left-[1269px] top-[936px] text-base text-left text-[#383838]">
      1,900
    </p>
    <p className="w-[74px] absolute left-[1269px] top-[1004px] text-base text-left text-[#383838]">
      1,900
    </p>
    <p className="w-[74px] absolute left-[1073px] top-[800px] text-base text-left text-[#383838]">
      -3,900
    </p>
    <p className="w-[74px] absolute left-[1073px] top-[868px] text-base text-left text-[#383838]">
      -3,900
    </p>
    <p className="w-[74px] absolute left-[1073px] top-[936px] text-base text-left text-[#383838]">
      -3,900
    </p>
    <p className="w-[74px] absolute left-[1073px] top-[1004px] text-base text-left text-[#383838]">
      -3,900
    </p>
    <p className="absolute left-[401px] top-[584px] text-xl font-bold text-left text-[#b3b3b3]">
      지난 결제 내역
    </p>
  </div>
</div>
    );
}