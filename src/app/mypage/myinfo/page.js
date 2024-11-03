"use client";

import React, { useState } from 'react';

export default function MyInfoPage() {
    return (
<div className="w-[1920px] h-[1906px] relative bg-white">
  <p className="absolute left-[380px] top-[100px] text-[40px] font-bold text-left text-[#383838]">
    마이페이지
  </p>
  <div className="w-[1120px] h-[492px]">
    <div className="w-[1120px] h-[444px] absolute left-[399px] top-[229px] rounded-[20px] bg-white border-2 border-black" />
    <div className="w-[377px] h-7 absolute left-[430px] top-[336px]">
      <p className="w-[123px] absolute left-0 top-0 text-xl font-bold text-left text-[#383838]">
        이메일
      </p>
      <p className="absolute left-[147px] top-0 text-lg text-left text-[#383838]">
        support@wordwiseweb.com
      </p>
    </div>
    <svg
      width={1060}
      height={1}
      viewBox="0 0 1060 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[429.5px] top-[451.5px]"
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
      className="absolute left-[429.5px] top-[383.5px]"
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
      className="absolute left-[429.5px] top-[315.5px]"
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
      className="absolute left-[429.5px] top-[519.5px]"
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
      className="absolute left-[429.5px] top-[587.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={1060} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <p className="w-[123px] absolute left-[430px] top-[268px] text-xl font-bold text-left text-[#383838]">
      프로필 사진
    </p>
    <p className="absolute left-[401px] top-[182px] text-xl font-bold text-left text-[#b3b3b3]">
      내 정보
    </p>
    <div className="flex flex-col justify-start items-start absolute left-[1355px] top-[614px] gap-2.5">
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-[30px] py-2 rounded-lg bg-[#336690] border-2 border-[#333236]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white/90">
          변경사항 저장
        </p>
      </div>
    </div>
    <div className="w-[617px] h-11 absolute left-[430px] top-[464px]">
      <p className="w-[123px] absolute left-0 top-2 text-xl font-bold text-left text-[#383838]">
        비밀번호 변경
      </p>
      <div className="flex justify-between items-center w-[470px] h-11 absolute left-[147px] top-0 px-[15px] py-[7px] rounded-[15px] bg-gray-100">
        <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#383838]">Abcdefgh1234!</p>
      </div>
    </div>
    <div className="w-[617px] h-11 absolute left-[430px] top-[532px]">
      <p className="w-[123px] absolute left-0 top-2 text-xl font-bold text-left text-[#383838]">
        비밀번호 확인
      </p>
      <div className="flex justify-between items-center w-[470px] h-11 absolute left-[147px] top-0 px-[15px] py-[7px] rounded-[15px] bg-gray-100">
        <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#383838]">Abcdefgh1234!</p>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center w-[470px] h-11 absolute left-[577px] top-[260px] px-[15px] py-[7px] rounded-[15px] bg-gray-100">
    <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#383838]">XYZ.jpg</p>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[15px] py-[7px] rounded-[15px] bg-white border-2 border-[#eee]">
      <p className="flex-grow-0 flex-shrink-0 text-sm text-right text-[#383838]">Upload</p>
    </div>
  </div>
  
  <div className="w-[961px] h-11 absolute left-[430px] top-[396px]">
    <p className="w-[123px] absolute left-0 top-2 text-xl font-bold text-left text-[#383838]">
      닉네임
    </p>
    <div className="flex justify-between items-center w-[470px] h-11 absolute left-[147px] top-0 px-[15px] py-[7px] rounded-[15px] bg-gray-100">
      <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#383838]">XYZ</p>
      <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#b3b3b3]">3/16</p>
    </div>
    <p className="absolute left-[641px] top-[9px] text-lg text-left text-[#336690]">
      한글 8자, 영문 및 숫자 16자 혼용 가능합니다.
    </p>
  </div>
</div>
    );
}