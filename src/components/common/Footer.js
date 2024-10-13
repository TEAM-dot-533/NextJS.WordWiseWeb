import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
      <div className="flex flex-col justify-start items-start w-[1920px] h-[120px] relative gap-5 px-[400px] py-[29px] bg-[#d9d9d9]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-6">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
            preserveAspectRatio="none"
          >
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10.6937 6.74074H12.1419L10.0022 13.2812H8.37646L6.93755 8.85239L5.45191 13.2812H3.83547L1.68645 6.74074H3.25617L4.73246 11.3378L6.27415 6.74074H7.67569L9.17066 11.3752L10.6937 6.74074ZM18.3325 6.71906H13.5951L13.1871 7.96497H18.3325V6.71906ZM12.7259 9.37701H18.3325V10.6229H12.3257L12.7259 9.37701ZM18.3325 12.035H11.8724L11.4644 13.2809H18.3325V12.035Z"
                fill="#383838"
              />
            </g>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">홈</p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            기능 소개
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            가격 및 플랜
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            고객 리뷰
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            블로그
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            자주 묻는 질문
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            개인정보 처리방침
          </p>
          <p className="flex-grow-0 flex-shrink-0 opacity-50 text-base text-left text-[#383838]">
            이용 약관
          </p>
        </div>
        <p className="flex-grow-0 flex-shrink-0 opacity-50 text-xs text-left text-[#383838]">
          ©&nbsp;2024&nbsp;Word Wise Web | 이메일 support@wordwiseweb.com
        </p>
    </div>
    );
  };

  export default Footer;
  