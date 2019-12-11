import React from 'react'
import styled from 'styled-components'
import Navigation from '../layout/Navigation'
import { white, borderColor, maxContentWidth } from '../theme/Theme'

export const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="content-container">
        <div className="header__left">
          <h1>MySite</h1>
          <h2>by BURTON<strong>MEDIA</strong></h2>
        </div>
        <div className="header__right">
          <Navigation />
          <div className="profile">
            <span className="profile__image">
              <img src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/43952658_10155536064632035_6420764125114138624_n.jpg?_nc_cat=104&_nc_ohc=zSmxGBpnj2sAQmzRCbWkS_piIChKn5Q-KTB_1Hwc6zViHZdaaaMizxF0Q&_nc_ht=scontent-ort2-1.xx&oh=a232b022690e44b8945e72353d1bdf45&oe=5E6EE472" alt="profile" />
            </span>
            <div className="profile__info">
              <span className="profile__name">Jesse Burton</span>
              <span className="profile__site">www.toko-pa.com</span>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  background-color: ${white};
  border-bottom: 1px solid ${borderColor};
  height: 7rem;
  margin-bottom: 3rem;
  font-size: 1.6rem;

  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${maxContentWidth};
    padding: 0 5rem;
    height: 100%;
    margin: 0 auto;

    h1 {
      font-size: 2.8rem;
      margin: 0;
      padding: 0;
    }
    h2 {
      font-size: 1.2rem;
      color: #c8c8c8;
      margin: 0;
      padding: 0;
      font-weight: 400;
    }

    .header__right {
      display: flex;
    }

    .profile {
      display: flex;
      align-items: center;
      border-left: 1px solid ${borderColor};
      position: relative;

      &__image {
        padding: 0 1rem 0 2rem;

        img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      &__info {
        span {
          display: block;
        }
      }

      &__name {
        font-weight: bold;
        font-size: 1.7rem;
      }

      &__site {
        color: #c8c8c8;
        font-size: 1.5rem;
      }
    }

  }
`