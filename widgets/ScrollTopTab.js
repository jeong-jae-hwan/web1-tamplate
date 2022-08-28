import React, { useEffect, useState } from 'react'
import styles from './scroll-top-tab.module.css'
import UpIcon from 'public/icons/scroll-up-icon.svg'
import Image from 'next/image'

function ScrollTopTab() {
  const [ScrollY, setScrollY] = useState(0)
  const [BtnStatus, setBtnStatus] = useState(false) // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset)
    if (ScrollY > 40) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true)
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false)
    }
  }

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScrollY(0) // ScrollY 의 값을 초기화
    setBtnStatus(false) // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch()
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <>
      {ScrollY > 30 && (
        <button className={styles.btnTop} onClick={handleTop}>
          <UpIcon />
        </button>
      )}
    </>
  )
}

export default ScrollTopTab
