export default function PlansPage() {
  return (
    <div className="w-[1920px] h-[1080px] relative bg-white">
  <p className="w-[546px] h-11 absolute left-[687px] top-[158px] text-4xl font-bold text-center text-[#383838]">
    프리미엄 구독료
  </p>
  <p className="w-[546px] absolute left-[687px] top-[120px] text-xl font-bold text-center text-[#336690]">
    요금 안내
  </p>
  <p className="w-[548px] h-12 absolute left-[686px] top-[222px] text-base text-center text-[#383838]">
    <span className="w-[548px] h-12 text-base text-center text-[#383838]">
      FREE 버전 : 카테고리 3개, 단어 100개 저장 가능
    </span>
    <br />
    <span className="w-[548px] h-12 text-base text-center text-[#383838]">
      PRO 버전 : 카테고리, 단어 저장 무제한, 학습하기 AI 튜터
    </span>
  </p>
  <div className="w-[360px] h-[286px]">
    <div className="w-[360px] h-[286px] absolute left-[584px] top-[329px] rounded-[20px] bg-white border-2 border-black" />
    <p className="w-[91.75px] absolute left-[615px] top-[360px] text-xl font-bold text-left text-black">
      FREE
    </p>
    <svg
      width={300}
      height={1}
      viewBox="0 0 300 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[614.5px] top-[467.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={300} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={300}
      height={1}
      viewBox="0 0 300 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[614.5px] top-[537.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={300} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <div className="w-[300.08px] h-7 absolute left-[615px] top-[558px]">
      <p className="w-[69.81px] absolute left-0 top-0 text-xl font-bold text-left text-[#383838]">
        단어장
      </p>
      <p className="w-[84px] absolute left-[216px] top-0.5 text-lg text-right text-[#383838]">
        최대 100개
      </p>
    </div>
    <div className="w-[300.08px] h-[30px] absolute left-[615px] top-[488px]">
      <p className="w-[72px] absolute left-0 top-px text-xl font-bold text-left text-[#383838]">
        카테고리
      </p>
      <p className="w-[79px] absolute left-[221px] top-[3px] text-lg text-right text-[#383838]">
        최대 3개
      </p>
    </div>
    <div className="w-[300.08px] h-[30px] absolute left-[615px] top-[418px]">
      <p className="w-[51.86px] absolute left-0 top-px text-xl font-bold text-left text-[#383838]">
        요금
      </p>
      <p className="w-[48.86px] absolute left-[251px] top-[3px] text-lg text-right text-[#383838]">
        $ 0
      </p>
    </div>
  </div>
  <div className="w-[360px] h-[286px]">
    <div className="w-[360px] h-[286px] absolute left-[974px] top-[329px] rounded-[20px] bg-white border-2 border-black" />
    <p className="w-[91.75px] absolute left-[1005px] top-[360px] text-xl font-bold text-left text-black">
      PRO
    </p>
    <svg
      width={300}
      height={1}
      viewBox="0 0 300 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[1004.5px] top-[467.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={300} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <svg
      width={300}
      height={1}
      viewBox="0 0 300 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[1004.5px] top-[537.5px]"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={300} y2="0.5" stroke="#B3B3B3" />
    </svg>
    <div className="w-[300.08px] h-7 absolute left-[1005px] top-[558px]">
      <p className="w-[69.81px] absolute left-0 top-0 text-xl font-bold text-left text-[#383838]">
        단어장
      </p>
      <p className="w-[69px] absolute left-[231px] top-0.5 text-lg text-right text-[#383838]">
        무제한
      </p>
    </div>
    <div className="w-[300.08px] h-[30px] absolute left-[1005px] top-[488px]">
      <p className="w-[72px] absolute left-0 top-px text-xl font-bold text-left text-[#383838]">
        카테고리
      </p>
      <p className="w-[86px] absolute left-[214px] top-[3px] text-lg text-right text-[#383838]">
        무제한
      </p>
    </div>
    <div className="w-[300.08px] h-[30px] absolute left-[1005px] top-[418px]">
      <p className="w-[51.86px] absolute left-0 top-px text-xl font-bold text-left text-[#383838]">
        요금
      </p>
      <p className="w-[93px] absolute left-[207px] top-[3px] text-lg text-right text-[#383838]">
        $2.99/월
      </p>
    </div>
  </div>
</div>
  );
}
