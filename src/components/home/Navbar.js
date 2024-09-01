"use client"; // client component로 명시 (명시 안할 시 서버 컴포넌트로 처리함)

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: '닉네임',
    level: 99,
    daysLeft: 30
  });

  const [showDropdown, setShowDropdown] = useState({ learn: false, download: false });

  const handleMouseEnter = (menu) => {
    setShowDropdown((prevState) => ({ ...prevState, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setShowDropdown((prevState) => ({ ...prevState, [menu]: false }));
  };

  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', borderBottom: '2px solid #ccc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
          <Image src="/images/WordWiseWeb.svg" alt="Word Wise Web Logo" width={40} height={40} style={{ marginRight: '10px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>WORD WISE WEB</span>
          <ul style={{ listStyle: 'none', display: 'flex', marginLeft: '20px', gap: '10px', padding: 0 }}>
            <li>
              <a href="#" style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', textDecoration: 'none', borderRadius: '4px', whiteSpace: 'nowrap' }}>소개</a>
            </li>
            <li>
              <a href="#" style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', textDecoration: 'none', borderRadius: '4px', whiteSpace: 'nowrap' }}>요금제</a>
            </li>
            {isLoggedIn && (
              <>
                <li
                  onMouseEnter={() => handleMouseEnter('learn')}
                  onMouseLeave={() => handleMouseLeave('learn')}
                  style={{ position: 'relative' }}
                >
                  <a href="#" style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', textDecoration: 'none', borderRadius: '4px', whiteSpace: 'nowrap' }}>학습하기</a>
                  {showDropdown.learn && (
                    <ul style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#e0e0e0',
                      listStyle: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>학습 안내</a></li>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>단어 맞추기</a></li>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>의미 맞추기</a></li>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>문장 만들기</a></li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => handleMouseEnter('download')}
                  onMouseLeave={() => handleMouseLeave('download')}
                  style={{ position: 'relative' }}
                >
                  <a href="#" style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', textDecoration: 'none', borderRadius: '4px', whiteSpace: 'nowrap' }}>다운로드</a>
                  {showDropdown.download && (
                    <ul style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#e0e0e0',
                      listStyle: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>확장 프로그램</a></li>
                      <li><a href="#" style={{ textDecoration: 'none', color: '#000', display: 'block', padding: '5px 0' }}>모바일</a></li>
                    </ul>
                  )}
                </li>
              </>
            )}
            <li>
              <a href="#" style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', textDecoration: 'none', borderRadius: '4px', whiteSpace: 'nowrap' }}>다운로드</a>
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'nowrap' }}>
          {isLoggedIn ? (
            <>
              <span style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', borderRadius: '4px', whiteSpace: 'nowrap' }}>{`${userInfo.nickname} / Lv ${userInfo.level} / D-${userInfo.daysLeft}`}</span>
              <button onClick={() => setIsLoggedIn(false)} style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', border: 'none', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>로그아웃</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsLoggedIn(true)} style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', border: 'none', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>로그인</button>
              <button style={{ padding: '5px 10px', backgroundColor: '#e0e0e0', color: '#000', border: 'none', cursor: 'pointer', borderRadius: '4px', whiteSpace: 'nowrap' }}>회원가입</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

