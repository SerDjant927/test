<template>
  <header class="header">
    <div class="container container_header container_header_desctop">
      <div class="header__block header__block_logo">
        <a href="/" class="logo-link" title="Whoosh">
          <img src="../assets/logo.svg" alt="logo" title="Whoosh">
        </a>
        <div class="location">
          <div class="location__btn js-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6C13 6.57825 12.721 7.43892 12.1734 8.50282C11.6424 9.53439 10.9235 10.6362 10.1881 11.6588C9.45537 12.6777 8.72044 13.5984 8.1676 14.2653C8.10961 14.3353 8.05367 14.4024 8 14.4665C7.94633 14.4024 7.89039 14.3353 7.8324 14.2653C7.27956 13.5984 6.54463 12.6777 5.81186 11.6588C5.07648 10.6362 4.3576 9.53439 3.82663 8.50282C3.27902 7.43892 3 6.57825 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="#C2D2F4" stroke-width="2"/>
              <path d="M13 6C13 6.57825 12.721 7.43892 12.1734 8.50282C11.6424 9.53439 10.9235 10.6362 10.1881 11.6588C9.45537 12.6777 8.72044 13.5984 8.1676 14.2653C8.10961 14.3353 8.05367 14.4024 8 14.4665C7.94633 14.4024 7.89039 14.3353 7.8324 14.2653C7.27956 13.5984 6.54463 12.6777 5.81186 11.6588C5.07648 10.6362 4.3576 9.53439 3.82663 8.50282C3.27902 7.43892 3 6.57825 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="#B7C6E7" stroke-width="2"/>
            </svg>
            <span>NY, Manhattan</span>

          </div>
        </div>
      </div>
      <div class="header__block header__block_tracker">
        <form action="" class="header-tracker">
          <input type="text" class="header-tracker__input" placeholder="Track a Package">
          <span class="header-tracker__btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z" fill="#B7C6E7"/>
              <path d="M7.33325 10L10.6666 8.66667V5.33333L7.33325 6.51254V10Z" fill="#B7C6E7"/>
              <path d="M6.66675 10L3.33341 8.66667V5.33333L6.66675 6.51254V10Z" fill="#B7C6E7"/>
              <path d="M6.99992 3.33333L3.33325 4.66667L6.99992 6L10.6666 4.66667L6.99992 3.33333Z" fill="#B7C6E7"/>
              <path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="#B7C6E7"/>
            </svg>
          </span>
        </form>
      </div>
      <div class="header__block header__block_personal">
        <a href="#" class="personal-link personal-link_text">Send a Parcel</a>
        <a href="#" class="personal-link personal-link_text">Become a Courier</a>
        <a href="#" class="personal-link personal-link_btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.02756 2 4 3.67893 4 5.75V7H3.71429C3.3198 7 3 7.33579 3 7.75V13.25C3 13.6642 3.3198 14 3.71429 14H12.2857C12.6802 14 13 13.6642 13 13.25V7.75C13 7.33579 12.6802 7 12.2857 7H12V5.75C12 3.67893 9.97244 2 8 2ZM8 4C6.81653 4 6 5 6 5.75V7H10V5.75C10 5 9.18347 4 8 4Z" fill="white"/>
          </svg>
        </a>
      </div>

    </div>
    <div class="container container_header container_header_mobile">
      <div class="header-mobile">
        <a href="javascript:void(0);" class="personal-cab-link">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.4 7.8C23.2778 7.8 24.8 6.27777 24.8 4.4C24.8 2.52223 23.2778 1 21.4 1C19.5222 1 18 2.52223 18 4.4C18 6.27777 19.5222 7.8 21.4 7.8Z" fill="#FD466E" stroke="#F8FAFF" stroke-width="2"/>
            <path d="M12 13.3999C12.5934 13.3999 13.1735 13.2239 13.6669 12.8942C14.1602 12.5645 14.5448 12.0959 14.7718 11.5476C14.9988 10.9993 15.0581 10.396 14.9422 9.81404C14.8263 9.23206 14.5404 8.69751 14.1207 8.27802C13.701 7.85852 13.1663 7.57293 12.5843 7.45735C12.0022 7.34178 11.399 7.40142 10.8508 7.62872C10.3027 7.85603 9.83424 8.2408 9.50479 8.73436C9.17534 9.22792 8.99966 9.80809 8.99998 10.4015C9.00125 11.1966 9.31778 11.9588 9.88016 12.5209C10.4425 13.0829 11.2049 13.3991 12 13.3999Z" fill="#C2D2F4"/>
            <path d="M12 13.3999C12.5934 13.3999 13.1735 13.2239 13.6669 12.8942C14.1602 12.5645 14.5448 12.0959 14.7718 11.5476C14.9988 10.9993 15.0581 10.396 14.9422 9.81404C14.8263 9.23206 14.5404 8.69751 14.1207 8.27802C13.701 7.85852 13.1663 7.57293 12.5843 7.45735C12.0022 7.34178 11.399 7.40142 10.8508 7.62872C10.3027 7.85603 9.83424 8.2408 9.50479 8.73436C9.17534 9.22792 8.99966 9.80809 8.99998 10.4015C9.00125 11.1966 9.31778 11.9588 9.88016 12.5209C10.4425 13.0829 11.2049 13.3991 12 13.3999Z" fill="#B7C6E7"/>
            <path d="M8.01637 20.5999H15.9836C16.3592 20.5999 16.7195 20.4593 16.9851 20.209C17.2508 19.9587 17.4 19.6192 17.4 19.2652V18.9599C17.3639 17.6328 16.7792 16.3716 15.7704 15.445C14.7616 14.5185 13.4087 13.9999 12 13.9999C10.5913 13.9999 9.23832 14.5185 8.22956 15.445C7.22079 16.3716 6.63604 17.6328 6.59998 18.9599V19.2652C6.59998 19.6192 6.7492 19.9587 7.01483 20.209C7.14635 20.3329 7.30249 20.4312 7.47434 20.4983C7.64618 20.5654 7.83037 20.5999 8.01637 20.5999Z" fill="#C2D2F4"/>
            <path d="M8.01637 20.5999H15.9836C16.3592 20.5999 16.7195 20.4593 16.9851 20.209C17.2508 19.9587 17.4 19.6192 17.4 19.2652V18.9599C17.3639 17.6328 16.7792 16.3716 15.7704 15.445C14.7616 14.5185 13.4087 13.9999 12 13.9999C10.5913 13.9999 9.23832 14.5185 8.22956 15.445C7.22079 16.3716 6.63604 17.6328 6.59998 18.9599V19.2652C6.59998 19.6192 6.7492 19.9587 7.01483 20.209C7.14635 20.3329 7.30249 20.4312 7.47434 20.4983C7.64618 20.5654 7.83037 20.5999 8.01637 20.5999Z" fill="#B7C6E7"/>
            <rect x="0.5" y="2.5" width="23" height="23" rx="11.5" stroke="#C2D2F4"/>
            <rect x="0.5" y="2.5" width="23" height="23" rx="11.5" stroke="#B7C6E7"/>
          </svg>
        </a>
        <a href="javascript:void(0);" class="logo logo_mobile">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M105.625 15.125C105.625 14.0204 106.52 13.125 107.625 13.125H108.625C109.73 13.125 110.625 14.0204 110.625 15.125V16.125C110.625 17.2296 111.52 18.125 112.625 18.125H113C114.105 18.125 115 17.2296 115 16.125V15.1264C115 14.0222 115.895 13.1269 116.999 13.1264L117.999 13.1259C119.104 13.1254 120 14.021 120 15.1259L120 24.8749C120 25.9795 119.104 26.8749 118 26.8749L117 26.8748C115.895 26.8747 115 25.9793 115 24.8748V23.875C115 22.7704 114.105 21.875 113 21.875H112.625C111.52 21.875 110.625 22.7704 110.625 23.875L110.625 24.8806C110.625 25.9828 109.733 26.8772 108.631 26.8774C108.296 26.8775 107.957 26.8774 107.622 26.8772C106.519 26.8765 105.625 25.9814 105.625 24.878L105.625 15.125Z" fill="#2B6BF3"/>
            <path d="M96.3142 12.7106C98.0021 12.2965 99.9762 12.4641 101.988 13.4725C102.309 13.6333 102.5 13.9683 102.5 14.3271V15.0985C102.5 15.8769 101.638 16.3708 100.911 16.0932C99.8911 15.704 98.7602 15.4809 97.8089 15.7265C97.0145 15.91 96.8148 17.1028 97.4658 17.5809C98.904 18.7182 100.972 18.7617 102.236 20.1791C103.2 21.2198 103.268 22.8038 102.965 24.1342C102.401 26.1432 100.356 27.2877 98.434 27.4543C96.5699 27.6125 94.6494 27.3742 92.9874 26.5138C92.6785 26.3539 92.5 26.0268 92.5 25.6791V24.4363C92.5 23.6225 93.4385 23.1281 94.1726 23.4793C95.2399 23.9899 96.4344 24.3385 97.454 24.1873C98.098 24.098 98.81 23.6054 98.7536 22.8617C98.5609 22.0987 97.7525 21.7944 97.1227 21.5071C95.9147 20.9541 94.5305 20.6378 93.5716 19.6454C92.5212 18.5685 92.4107 16.8348 92.9324 15.4705C93.4964 14.0193 94.8971 13.109 96.3142 12.7106Z" fill="#2B6BF3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M83.75 27.5C83.75 29.375 83.125 36.25 65.3125 36.25L65.3125 34.375C80.625 34.375 81.875 29.375 81.875 27.5L83.75 27.5Z" fill="#C2D2F4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M83.75 27.5C83.75 29.375 83.125 36.25 65.3125 36.25L65.3125 34.375C80.625 34.375 81.875 29.375 81.875 27.5L83.75 27.5Z" fill="#B7C6E7"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.0475 12.7814C86.0572 12.7454 86.0577 12.7435 86.0577 12.7739C86.0577 10.9905 84.6048 9.54475 82.8125 9.54475C81.0202 9.54475 79.5673 10.9905 79.5673 12.7739C79.5673 12.7435 79.5678 12.7454 79.5775 12.7814C79.6078 12.8934 79.727 13.3348 80.1964 14.1608C80.7484 15.1321 81.5447 16.2218 82.4341 17.298C82.5602 17.4506 82.6866 17.601 82.8125 17.7488C82.9384 17.601 83.0648 17.4506 83.1909 17.298C84.0802 16.2218 84.8766 15.1321 85.4286 14.1608C85.898 13.3348 86.0172 12.8934 86.0475 12.7814ZM82.8125 24.375C82.8125 24.375 90.625 17.0673 90.625 12.7739C90.625 8.4805 87.1272 5 82.8125 5C78.4978 5 75 8.4805 75 12.7739C75 17.0673 82.8125 24.375 82.8125 24.375Z" fill="#FFDD2D"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5475 20.2814C68.5572 20.2454 68.5577 20.2435 68.5577 20.2739C68.5577 18.4905 67.1048 17.0448 65.3125 17.0448C63.5202 17.0448 62.0673 18.4905 62.0673 20.2739C62.0673 20.2435 62.0678 20.2454 62.0775 20.2814C62.1078 20.3934 62.227 20.8348 62.6964 21.6608C63.2484 22.6321 64.0447 23.7218 64.9341 24.798C65.0602 24.9506 65.1866 25.101 65.3125 25.2488C65.4384 25.101 65.5648 24.9506 65.6909 24.798C66.5802 23.7218 67.3766 22.6321 67.9286 21.6608C68.398 20.8348 68.5172 20.3934 68.5475 20.2814ZM65.3125 31.875C65.3125 31.875 73.125 24.5673 73.125 20.2739C73.125 15.9805 69.6272 12.5 65.3125 12.5C60.9978 12.5 57.5 15.9805 57.5 20.2739C57.5 24.5673 65.3125 31.875 65.3125 31.875Z" fill="#2B6BF3"/>
            <path d="M40 15.125C40 14.0204 40.8954 13.125 42 13.125H43C44.1046 13.125 45 14.0204 45 15.125V16.125C45 17.2296 45.8955 18.125 47 18.125H47.375C48.4796 18.125 49.375 17.2296 49.375 16.125V15.1264C49.375 14.0222 50.2699 13.1269 51.3741 13.1264L52.3741 13.1259C53.479 13.1254 54.375 14.021 54.375 15.1259L54.375 24.8749C54.375 25.9795 53.4795 26.8749 52.3749 26.8749L51.3749 26.8748C50.2704 26.8747 49.375 25.9793 49.375 24.8748V23.875C49.375 22.7704 48.4796 21.875 47.375 21.875H47C45.8955 21.875 45 22.7704 45 23.875L45 24.8806C45 25.9828 44.1082 26.8772 43.006 26.8774C42.6705 26.8775 42.3324 26.8774 41.997 26.8772C40.8936 26.8765 40 25.9814 40 24.878L40 15.125Z" fill="#2B6BF3"/>
            <path d="M4.375 11.25C4.375 10.3125 5 9.41027 6.25 9.375H16.5922C17.4966 9.375 18.2884 9.98183 18.5235 10.8551L19.4664 14.3575C19.7226 15.3088 21.0548 15.3556 21.377 14.4246L22.6581 10.7239C22.9374 9.91689 23.6984 9.37627 24.5525 9.37817L26.0798 9.38156C26.9303 9.38345 27.6866 9.92302 27.9651 10.7266L29.2481 14.4287C29.5706 15.3592 30.9022 15.3124 31.1585 14.3615L32.1012 10.8642C32.3365 9.99124 33.1282 9.38471 34.0323 9.38471L35.3809 9.38471C36.7371 9.38471 37.7001 10.7059 37.2849 11.997L32.9463 25.4873C32.6803 26.3143 31.911 26.875 31.0423 26.875H29.0808C28.1542 26.875 27.3489 26.2385 27.1349 25.337L26.2877 21.7687C26.0444 20.7438 24.5862 20.7432 24.342 21.7679L23.4911 25.3386C23.2765 26.2394 22.4716 26.875 21.5456 26.875H13.125C11.875 26.875 11.25 25.9375 11.25 25C11.25 24.0625 11.875 23.125 13.125 23.125H15C16.25 23.125 16.875 22.5 16.875 21.5625C16.875 20.625 16.25 20 15 20H1.875C0.625 20 0 19.0625 0 18.125C0 17.1875 0.625 16.25 1.875 16.25H13.75C15 16.25 15.625 15.625 15.625 14.6875C15.625 13.75 14.9552 13.1087 13.75 13.125H6.25C5 13.125 4.375 12.1875 4.375 11.25Z" fill="#2B6BF3"/>
            <path d="M3.75 25C3.75 23.9645 4.58947 23.125 5.625 23.125H7.5C8.53553 23.125 9.375 23.9645 9.375 25C9.375 26.0355 8.53553 26.875 7.5 26.875H5.625C4.58947 26.875 3.75 26.0355 3.75 25Z" fill="#2B6BF3"/>
          </svg>
        </a>


        <BurgerBtn></BurgerBtn>
      </div>
    </div>
  </header>
</template>
<style lang="less">
.header{
  background-color: #F8FAFF;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #2B6BF316;
  height: 80px;
  &__block{
    display: flex;
    align-items: center;
    justify-content: center;
    &_logo{
      column-gap: 68px;
      //margin-right: 169px;
    }
    &_tracker{
      display: flex;
      width: 184px;
      //margin-right: 211px;
      max-width: 100%;
      height: 40px;
    }
  }
}
.header-tracker{
  position: relative;
  height: 100%;
  left: -23px;
  top: -2px;
  &__input{
    width: 100%;
    height: 100%;
    background-color: #fff;
    border:1px solid #B7C6E7;
    padding: 12px 16px;
    font-family: 'Intro Book', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #1D253C;
    border-radius: 8px;
    &::placeholder{
      opacity: 0.56;
    }
    &:hover{
      background-color: transparent;
      &::placeholder{
        opacity: 1;
      }
    }
    &:focus{
      background-color: #fff;
      &::placeholder{
        opacity: 1;
      }
    }
  }
  &__btn{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
}
.personal-link{
  &_text{
    font-family: 'Intro Book', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #666666;
    margin-right: 36px;
    display: flex;
    width: max-content;
    &:nth-child(2){
      margin-right: 32px;
    }
  }
  &_btn{
    //margin-left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #2B6BF3;
  }
}
.location{
  position: relative;
  top: -2px;
  left: -1px;
  &__btn{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    column-gap: 6px;
    font-family: 'Intro Book', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #666666;
    border-bottom: 1px solid transparent;
    &:hover{
      border-bottom: 1px dashed #666;
    }
  }
  &__list{
    display: none;
    position: absolute;
  }
}
@media(max-width: 375px){
  .container.container_header.container_header_desctop{
    display: none;
  }
  .container.container_header.container_header_mobile{
    display: flex;
  }
  .header-mobile{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }
  .logo.logo_mobile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .burger-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .header-tracker{
    height: 40px;
    left: unset;
    top: unset;
  }
  #sidemenu {
    nav {
      width: 200px;
      // height: calc(100% - #{$headerHeight} - #{$footerHeight});
      background: grey;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      // box-shadow: 2px 0 3px$grey-6;
      // overflow-y: scroll;
    }

    .sidemenu {
      &__btn {
        display: block;
        width: 50px;
        height: 50px;
        background: grey;
        border: none;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;

        span {
          display: block;
          width: 20px;
          height: 2px;
          margin: auto;
          background: white;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all .4s ease;

          &.top {
            transform: translateY(-8px);
          }

          &.bottom {
            transform: translateY(8px);
          }
        }
        &.active{
          .top {
            transform: rotate(-45deg);
          }
          .mid{
            transform: translateX(-20px) rotate(360deg);
            opacity: 0;
          }
          .bottom {
            transform: rotate(45deg);
          }
        }

      }

      &__wrapper {
        padding-top: 50px;
      }

      &__list {
        padding-top: 50px;
        list-style:none;
        padding: 0;
        margin: 0;
      }

      &__item {
        a {
          text-decoration: none;
          line-height: 1.6em;
          font-size: 1.6em;
          padding: .5em;
          display: block;
          color: white;
          transition: .4s ease;

          &:hover {
            background: lightgrey;
            color: dimgrey;
          }
        }
      }
    }
  }
  .translateX-enter{
    transform:translateX(-200px);
    opacity: 0;
  }
  .translateX-enter-active,.translateX-leave-active{
    transform-origin: top left 0;
    transition:.2s ease;
  }
  .translateX-leave-to{
    transform: translateX(-200px);
    opacity: 0;
  }
  .bm-item-list>*{
    padding: unset!important;
  }
  .bm-item-list{
    margin-left: unset!important;
    padding: 0 16px;
    display: flex;
    height: 100%;
    min-width: max-content;
    max-height: 100vh;
    flex-direction: column;
  }
  .bm-item-list>*>span{
    color: #666!important;
    font-weight: 400!important;
    font-size: 16px!important;
    line-height: 24px!important;
  }
  .burger-menu__link{
    color: #666;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 44px;
    &:nth-child(1n + 2){
      margin-top: 24px;
    }
  }
  .burger-menu__order-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background-color: #2B6BF3;
    border-radius: 32px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    margin-top: auto;
    margin-bottom: 32px;
  }
  .bm-burger-button{
    position: static;
    background: url("../assets/burger.svg");
    display: flex;
    height: 24px!important;
    width: 24px!important;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    left: unset!important;
    right: 0px!important;
    top: 12px!important;
    bottom: 12px!important;
    margin: auto 0!important;
  }
  .cross-style{
    top: 17px!important;
  }
  .header-mobile{
    position: relative;
  }
  .line-style{
    display: none;
  }
  .bm-menu{
    background-color: #ffffff!important;
    max-width: 274px;
    .location__btn{
      position: absolute;
      color: #666!important;
      top: 20px;
    }
  }
  .cross-style{
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20px;
    right: 12px!important;
    background: url("../assets/close.svg");
    display: flex;
    height: 24px;
    width: 24px;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bm-cross{
    display: none;
  }
}
</style>
<script>

import BurgerBtn from './BurgerBtn.vue'

export default {
  components: {
    BurgerBtn
  }
}
</script>