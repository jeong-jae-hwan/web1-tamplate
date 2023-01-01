import styled from '@emotion/styled'

//styled
export const HeaderStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in-out;

  @media (max-width: 1080px) {
    height: 58px;
  }

  header {
    z-index: 999;
    //
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    //
    width: 100%;
    height: 70px;
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    //
    transition: 0.3s ease-in-out;

    @media (max-width: 1080px) {
      height: 58px;
    }

    h1 {
      width: 1px;
      height: 1px;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
    }

    .logo {
      width: 34px;
      height: 34px;
      transition: 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        width: 100%;
      }

      svg {
        width: 100%;
        width: 100%;
      }

      @media (max-width: 1080px) {
        width: 28px;
        height: 28px;
      }
    }
  }
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 0.3s ease-in-out;
  cursor: auto;

  @media (max-width: 1080px) {
    padding: 0 20px;
  }
`