<template>
    <div class="container container_main">
    <section class="main">
      <div class="main-block">
        <h1 class="main-block__headline headline">Our service started
          work in New York</h1>
        <p class="main-block__descr">
          We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.
        </p>
        <a href="#" class="main-block__btn">
          <span>Read more</span>
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.72351 3.30468L1.61047 0.269411C1.24206 -0.0898037 0.644732 -0.0898037 0.276314 0.269411C-0.0921045 0.628626 -0.0921046 1.21103 0.276314 1.57024L2.76841 4.00008L0.276486 6.42976C-0.0919318 6.78897 -0.0919317 7.37137 0.276486 7.73059C0.644904 8.0898 1.24223 8.0898 1.61065 7.73059L4.72369 4.69531C4.92006 4.50384 5.01177 4.24896 4.99879 3.99827C5.01075 3.74869 4.91899 3.49527 4.72351 3.30468Z" fill="#2B6BF3"/>
          </svg>
        </a>
        <div data-slider="demo" class="demo-slider">
          <h3 class="demo-slider__title">How it works</h3>
          <div class="slider__list slider__list_video" >
            <VideoCarousel></VideoCarousel>

          </div>
        </div>
      </div>
      <div class="main-block main-block_tabs">
        <div class="tabs-block">
          <div class="tabs-block__up">
            <h3 class="tabs-block__headline">Send a Parcel</h3>
            <div class="tooltip-block">
              <a href="#" class="tooltip js-tooltip">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DDE7FD"/>
                  <path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11Z" fill="white"/>
                  <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7Z" fill="white"/>
                </svg>
              </a>
              <div class="tooltip-text">
                A commission is a piece of work that someone is asked to do and is paid for.
              </div>
            </div>
          </div>

          <div  class="tabs-block__main">
            <form action="" class="tabs-form js-tabs-container">
              <div class="tabs-form__btns">
                <span @click="setActiveTab = 'ActiveTab1' " class="tabs-btn js-tab-btn">
                  <div class="tabs-btn__block">
                    <div class="tabs-btn__img tabs-btn__img_double">
                      <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9992 7.99822C23.5447 8.00024 23.0919 8.05391 22.6496 8.15819L20.5003 2.99933H22.9995V3.99911H24.9988V1.99956C24.9988 1.7344 24.8935 1.4801 24.706 1.29261C24.5186 1.10511 24.2643 0.999778 23.9992 0.999778H19.0008C18.837 1.00059 18.676 1.04162 18.5318 1.11924C18.3877 1.19687 18.2648 1.30872 18.174 1.44497C18.0831 1.58121 18.0272 1.73769 18.011 1.90063C17.9948 2.06358 18.0188 2.22801 18.0811 2.37947L18.7508 3.99911H12.003L11.3832 1.99956H13.0027V0H7.00459V1.99956H9.26387L10.0736 4.61897L8.00427 8.34815C6.84429 7.93641 5.58573 7.89156 4.39938 8.21966C3.21303 8.54777 2.15634 9.23295 1.37269 10.1822C0.589041 11.1315 0.116385 12.2989 0.0188609 13.526C-0.0786637 14.7532 0.203665 15.9806 0.827535 17.0418C1.4514 18.1029 2.38661 18.9464 3.50624 19.4578C4.62587 19.9692 5.87571 20.1238 7.08617 19.9005C8.29662 19.6772 9.40907 19.0868 10.2726 18.2096C11.1361 17.3323 11.7088 16.2106 11.913 14.9967H14.0024C14.167 14.9958 14.3289 14.9543 14.4737 14.8758C14.6184 14.7973 14.7415 14.6843 14.8321 14.5468L19.9505 6.86847L20.8102 8.91802C19.5862 9.68734 18.6813 10.8729 18.2618 12.2564C17.8424 13.64 17.9367 15.1285 18.5274 16.4481C19.1181 17.7676 20.1655 18.8294 21.4768 19.4381C22.7881 20.0467 24.275 20.1613 25.664 19.7606C27.053 19.36 28.2506 18.4712 29.0364 17.2577C29.8222 16.0441 30.1434 14.5876 29.9408 13.1561C29.7382 11.7246 29.0254 10.4145 27.9337 9.46679C26.842 8.51907 25.4448 7.99756 23.9992 7.99822ZM12.5828 5.99867H18.131L14.3323 11.6874L12.5828 5.99867ZM10.8834 7.26839L12.6528 12.9971H11.913C11.6658 11.5461 10.8937 10.2366 9.74372 9.31793L10.8834 7.26839ZM8.75403 11.1075C9.29262 11.6218 9.67693 12.2762 9.86368 12.9971H7.70437L8.75403 11.1075ZM6.00491 17.996C4.94439 17.996 3.92729 17.5747 3.17739 16.8247C2.42748 16.0747 2.00619 15.0575 2.00619 13.9969C2.00619 12.9363 2.42748 11.9191 3.17739 11.1691C3.92729 10.4191 4.94439 9.99778 6.00491 9.99778C6.34271 10.002 6.67862 10.049 7.00459 10.1377L5.13519 13.507C5.04975 13.659 5.00556 13.8307 5.00699 14.0051C5.00842 14.1795 5.05542 14.3504 5.14334 14.501C5.23126 14.6516 5.35703 14.7766 5.50817 14.8635C5.65931 14.9505 5.83055 14.9964 6.00491 14.9967H9.86368C9.64261 15.853 9.14398 16.6118 8.44577 17.1545C7.74757 17.6972 6.88919 17.9931 6.00491 17.996ZM23.9992 17.996C23.1666 17.9899 22.3568 17.7241 21.6826 17.2356C21.0084 16.7471 20.5034 16.0604 20.2382 15.2711C19.9729 14.4819 19.9606 13.6296 20.2029 12.833C20.4452 12.0364 20.9301 11.3354 21.5899 10.8276L23.0695 14.3868L24.9189 13.617L23.4393 10.0578C23.6243 10.0246 23.8114 10.0046 23.9992 9.99778C25.0597 9.99778 26.0768 10.4191 26.8267 11.1691C27.5766 11.9191 27.9979 12.9363 27.9979 13.9969C27.9979 15.0575 27.5766 16.0747 26.8267 16.8247C26.0768 17.5747 25.0597 17.996 23.9992 17.996Z" fill="#2B6BF3"/>
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6820_277)">
                          <path d="M7.30437 0C5.57603 0 4.17388 1.34277 4.17388 2.99993C4.17388 4.65618 5.57603 5.99985 7.30437 5.99985C9.03271 5.99985 10.4349 4.65618 10.4349 2.99993C10.4349 1.34277 9.03271 0 7.30437 0ZM7.30437 3.9998C6.72742 3.9998 6.26098 3.55161 6.26098 2.99993C6.26098 2.44704 6.72742 2.00005 7.30437 2.00005C7.88132 2.00005 8.34776 2.44734 8.34776 2.99993C8.34776 3.55161 7.88132 3.9998 7.30437 3.9998Z" fill="#2B6BF3"/>
                          <path d="M7.02701 18.6835L1.4754 24L0 22.5858L5.55161 17.2679L7.02701 18.6835Z" fill="#2B6BF3"/>
                          <path d="M2.08678 15.0002H4.17388V12.8289L6.26098 10.8279V15.8282L10.4349 19.8283V24H12.522V19.9999C12.522 19.4503 12.1895 18.6814 11.7841 18.2932L8.34776 14.9981V7.9999H6.26098L2.82464 11.2926C2.41893 11.6811 2.08678 12.45 2.08678 12.9996V15.0002Z" fill="#2B6BF3"/>
                          <path d="M11.4783 14H16.6957L17.7392 12H12L9.39133 9V11.5L11.4783 14Z" fill="#2B6BF3"/>
                          <path d="M23.9982 10.0001V2.9957C23.9982 2.50002 23.4764 2.00002 22.96 2.00291L23.9982 10.0001ZM23.9982 10.0001C23.9995 10.4974 23.4783 11.0001 22.96 10.9961L23.9982 10.0001ZM14.5652 9.94775V3.0523C14.5697 3.04668 14.5753 3.04048 14.582 3.03409C14.5909 3.02553 14.6004 3.01788 14.6098 3.01152C14.6177 3.00616 14.6244 3.00243 14.6294 3H14.6308L14.6544 3L14.6532 4.00043C14.6513 5.66648 14.6519 7.33231 14.6532 8.9982L14.654 9.99772L15.6535 9.99742C16.3065 9.99722 16.9606 9.99771 17.6152 9.99819C17.7435 9.99828 17.8718 9.99838 18.0001 9.99847L14.6294 10.0001C14.6244 9.99763 14.6177 9.9939 14.6098 9.98855C14.6005 9.98219 14.591 9.97454 14.582 9.96597C14.5754 9.95957 14.5697 9.95337 14.5652 9.94775ZM14.6069 2L14.6069 3C14.6069 3 14.6069 3 14.6069 3V2ZM15.655 3.00161L14.7619 3L14.9655 3.00001L15.9112 3.00005L16.5047 3.00012C16.4514 3.00027 16.3983 3.00043 16.3453 3.00059C16.1116 3.00131 15.8807 3.00202 15.655 3.00161ZM17.7494 3.00485C17.5902 3.00241 17.43 3.00098 17.2696 3.0002L18.7813 3.00037C19.3555 3.00047 19.9297 3.0006 20.4606 3.00076C20.3968 3.00085 20.3331 3.00094 20.2695 3.00104C20.1212 3.00126 19.9733 3.00148 19.8258 3.00161L18.8299 3.00251L18.8267 3.99835C18.825 4.50302 18.8255 4.97855 18.8259 5.45177C18.8261 5.63451 18.8262 5.81691 18.8263 6.00051C18.7966 6.00057 18.7669 6.00063 18.7372 6.00067C18.7374 5.85047 18.7379 5.69966 18.7383 5.54801L18.7384 5.50357C18.7398 5.00572 18.741 4.49905 18.734 3.991L18.7207 3.01972L17.7494 3.00485ZM21.9165 3.00288C21.7975 3.00213 21.6785 3.00158 21.5595 3.00119C21.5907 3.0012 21.6216 3.00122 21.6521 3.00124C22.0437 3.00144 22.37 3.00168 22.5984 3.00195L22.7051 3.00213L22.7091 3.00433L22.9382 3.00305C22.9424 3.00524 22.9477 3.00831 22.9538 3.01245C22.963 3.01866 22.9724 3.02624 22.9814 3.03482C22.988 3.04114 22.9936 3.04731 22.9982 3.05294V9.9464C22.9935 9.95219 22.9878 9.95857 22.981 9.96509C22.9721 9.97361 22.9628 9.9811 22.9539 9.98721C22.9481 9.99111 22.9431 9.99403 22.9392 9.99613L21.0925 9.997C21.3657 9.99632 21.6387 9.99543 21.9117 9.99429L22.9025 9.99013L22.9075 8.99939C22.9139 7.74814 22.9126 6.49585 22.9112 5.24718C22.9108 4.83182 22.9103 4.41686 22.9102 4.00247L22.9098 3.00913L21.9165 3.00288Z" stroke="#FFDD2D" stroke-width="2"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_6820_277">
                            <rect width="24" height="24" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div class="tabs-btn__text">up to 10lb</div>
                  </div>
                </span>
                <span @click="setActiveTab = 'ActiveTab2' " class="tabs-btn tabs-btn_active js-tab-btn">
                  <div class="tabs-btn__block">
                    <div class="tabs-btn__img">
                      <svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 25V19.5616L4.09325 19.0382C4.61046 18.9089 5.0966 18.6775 5.52311 18.3577L12.6667 13L27.3591 13L33.5132 17.3958C33.9414 17.7017 34.4259 17.9201 34.9387 18.0384L46 20.591V25H43V27H46C47.1046 27 48 26.1046 48 25V20.591C48 19.6597 47.3572 18.8517 46.4497 18.6422L35.3884 16.0896C35.132 16.0305 34.8898 15.9213 34.6756 15.7683L28.5215 11.3725C28.1823 11.1302 27.7759 11 27.3591 11H12.6667C12.2339 11 11.8129 11.1404 11.4667 11.4L4.32311 16.7577C4.10985 16.9176 3.86678 17.0333 3.60818 17.098L1.51493 17.6213C0.624595 17.8439 0 18.6438 0 19.5616V25C0 26.1046 0.895432 27 2 27H6V25H2Z" fill="#2B6BF3"/>
                        <path d="M17 25V27H36V25H17Z" fill="#2B6BF3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 28C10.8807 28 12 26.8807 12 25.5C12 24.1193 10.8807 23 9.5 23C8.11929 23 7 24.1193 7 25.5C7 26.8807 8.11929 28 9.5 28ZM9.5 30C11.9853 30 14 27.9853 14 25.5C14 23.0147 11.9853 21 9.5 21C7.01472 21 5 23.0147 5 25.5C5 27.9853 7.01472 30 9.5 30Z" fill="#2B6BF3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5 28C40.8807 28 42 26.8807 42 25.5C42 24.1193 40.8807 23 39.5 23C38.1193 23 37 24.1193 37 25.5C37 26.8807 38.1193 28 39.5 28ZM39.5 30C41.9853 30 44 27.9853 44 25.5C44 23.0147 41.9853 21 39.5 21C37.0147 21 35 23.0147 35 25.5C35 27.9853 37.0147 30 39.5 30Z" fill="#2B6BF3"/>
                        <path d="M15 3.39627V1.04087C15.0007 1.03992 15.0014 1.03896 15.0021 1.03799L15.001 2.00048C15.0005 2.46576 15.0002 2.93102 15 3.39627ZM16.0029 1.00161L15.1469 1L15.342 1.00001L16.2483 1.00005L16.8164 1.00011C16.7651 1.00027 16.7139 1.00043 16.6629 1.00059C16.4392 1.00131 16.2183 1.00202 16.0029 1.00161ZM18.0112 1.00486C17.8581 1.00242 17.7041 1.00098 17.5499 1.0002L18.9987 1.00037C19.549 1.00047 20.0992 1.0006 20.6079 1.00076C20.5467 1.00085 20.4856 1.00094 20.4246 1.00104C20.2825 1.00126 20.1409 1.00148 19.9996 1.00161L19.0037 1.00254L19.0006 1.99848C19 2.17727 18.9997 2.35254 18.9996 2.52544C18.9988 2.34785 18.9974 2.16979 18.9951 1.99157L18.9823 1.02037L18.0112 1.00486ZM22.0038 1.00288C21.8897 1.00213 21.7755 1.00158 21.6613 1.00119C21.6912 1.0012 21.7207 1.00122 21.7499 1.00124C22.1252 1.00144 22.4378 1.00168 22.6567 1.00195L22.7388 1.0021L22.7429 1.00445L22.9605 1.00318C22.9629 1.00501 22.9655 1.00702 22.9681 1.00922L22.0038 1.00288ZM22.9969 1.03958C22.9973 1.04022 22.9978 1.04085 22.9983 1.04147V3.25926C22.9983 3.25526 22.9983 3.25125 22.9983 3.24725C22.9978 2.83189 22.9974 2.41691 22.9972 2.00248L22.9969 1.03958ZM22.9947 6.99918C22.9964 6.65124 22.9976 6.30322 22.9983 5.95522V7.95779C22.9958 7.9612 22.9931 7.96479 22.99 7.96845L22.9947 6.99918ZM22.9686 7.99004C22.966 7.99226 22.9634 7.9943 22.961 7.99614L21.2139 7.997C21.4757 7.99632 21.7374 7.99543 21.9991 7.99429L22.9686 7.99004ZM17.8808 7.99819C18.0037 7.99828 18.1266 7.99838 18.2495 7.99847L15.0411 8.00005C15.041 8.00001 15.041 7.99997 15.0409 7.99993C15.0399 7.99922 15.0389 7.99849 15.0379 7.99772L16.0013 7.99742C16.6269 7.99723 17.2536 7.99771 17.8808 7.99819ZM15.0018 7.96157C15.0012 7.96076 15.0006 7.95996 15 7.95917V5.17709C15.0002 5.78412 15.0006 6.39114 15.001 6.99817L15.0018 7.96157ZM18.9993 3.50345C18.9995 3.44857 18.9996 3.39358 18.9997 3.3385C18.9998 3.37619 18.9998 3.41386 18.9998 3.45151C19 3.63438 19.0002 3.81691 19.0002 4.00059C18.9995 4.0006 18.9989 4.0006 18.9982 4.0006C18.9984 3.85044 18.9988 3.69969 18.9992 3.54814L18.9993 3.50345ZM14.9984 1H14.9983V0.996523V0L14.9984 0.996523L14.9984 1Z" stroke="#FFDD2D" stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="tabs-btn__text">up to 130lb</div>
                  </div>
                </span>
                <span @click="setActiveTab = 'ActiveTab3' " class="tabs-btn js-tab-btn">
                  <div class="tabs-btn__block">
                    <div class="tabs-btn__img">
                      <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 24C10.1046 24 11 23.1046 11 22C11 20.8954 10.1046 20 9 20C7.89543 20 7 20.8954 7 22C7 23.1046 7.89543 24 9 24ZM9 26C11.2091 26 13 24.2091 13 22C13 19.7909 11.2091 18 9 18C6.79086 18 5 19.7909 5 22C5 24.2091 6.79086 26 9 26Z" fill="#2B6BF3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30 24C31.1046 24 32 23.1046 32 22C32 20.8954 31.1046 20 30 20C28.8954 20 28 20.8954 28 22C28 23.1046 28.8954 24 30 24ZM30 26C32.2091 26 34 24.2091 34 22C34 19.7909 32.2091 18 30 18C27.7909 18 26 19.7909 26 22C26 24.2091 27.7909 26 30 26Z" fill="#2B6BF3"/>
                        <path d="M20 15H2L2 21H5V23H2C0.89543 23 0 22.1046 0 21V15C0 13.8954 0.895431 13 2 13H18V2C18 0.89543 18.8954 0 20 0H30.2639C31.0215 0 31.714 0.428005 32.0528 1.10557L37.7889 12.5777C37.9277 12.8554 38 13.1616 38 13.4721V21C38 22.1046 37.1046 23 36 23H34V21H36V13.4721L30.2639 2L20 2V15Z" fill="#2B6BF3"/>
                        <path d="M26 21H16V23H26V21Z" fill="#2B6BF3"/>
                        <path d="M6 5.39627V3.04087C6.00068 3.03992 6.00138 3.03896 6.00212 3.03799L6.00103 4.00048C6.00051 4.46576 6.00018 4.93102 6 5.39627ZM7.00291 3.00161L6.14692 3L6.34199 3.00001L7.24828 3.00005L7.81644 3.00011C7.76513 3.00027 7.71395 3.00043 7.66291 3.00059C7.43915 3.00131 7.2183 3.00202 7.00291 3.00161ZM9.01116 3.00486C8.85812 3.00242 8.70409 3.00098 8.54987 3.0002L9.99872 3.00037C10.549 3.00047 11.0992 3.0006 11.6079 3.00076C11.5467 3.00085 11.4856 3.00094 11.4246 3.00104C11.2825 3.00126 11.1409 3.00148 10.9996 3.00161L10.0037 3.00254L10.0006 3.99848C10 4.17727 9.99972 4.35254 9.99957 4.52544C9.99883 4.34785 9.99744 4.16979 9.9951 3.99157L9.98232 3.02037L9.01116 3.00486ZM13.0038 3.00288C12.8897 3.00213 12.7755 3.00158 12.6613 3.00119C12.6912 3.0012 12.7207 3.00122 12.7499 3.00124C13.1252 3.00144 13.4378 3.00168 13.6567 3.00195L13.7388 3.0021L13.7429 3.00445L13.9605 3.00318C13.9629 3.00501 13.9655 3.00702 13.9681 3.00922L13.0038 3.00288ZM13.9969 3.03958C13.9973 3.04022 13.9978 3.04085 13.9983 3.04147V5.25926C13.9983 5.25526 13.9983 5.25125 13.9983 5.24725C13.9978 4.83189 13.9974 4.41691 13.9972 4.00248L13.9969 3.03958ZM13.9947 8.99918C13.9964 8.65124 13.9976 8.30322 13.9983 7.95522V9.95779C13.9958 9.9612 13.9931 9.96479 13.99 9.96845L13.9947 8.99918ZM13.9686 9.99004C13.966 9.99226 13.9634 9.9943 13.961 9.99614L12.2139 9.997C12.4757 9.99632 12.7374 9.99543 12.9991 9.99429L13.9686 9.99004ZM8.88084 9.99819C9.0037 9.99828 9.12658 9.99838 9.24949 9.99847L6.04108 10.0001C6.04102 10 6.04096 9.99997 6.0409 9.99993C6.03991 9.99922 6.0389 9.99849 6.03788 9.99772L7.00134 9.99742C7.62691 9.99723 8.25356 9.99771 8.88084 9.99819ZM6.00175 9.96157C6.00115 9.96076 6.00057 9.95996 6 9.95917V7.17709C6.0002 7.78412 6.00058 8.39114 6.00103 8.99817L6.00175 9.96157ZM9.99932 5.50345C9.99947 5.44857 9.99961 5.39358 9.99974 5.3385C9.99977 5.37619 9.99981 5.41386 9.99984 5.45151C10 5.63438 10.0002 5.81691 10.0002 6.00059C9.99953 6.0006 9.99886 6.0006 9.99819 6.0006C9.99839 5.85044 9.9988 5.69969 9.9992 5.54814L9.99932 5.50345ZM5.99835 3H5.99826V2.99652V2L5.99835 2.99652L5.99835 3Z" stroke="#FFDD2D" stroke-width="2"/>
                      </svg>
                    </div>
                    <div class="tabs-btn__text">up to 130lb</div>
                  </div>
                </span>
              </div>
              <div class="tabs-form__content">
                <component :is="setActiveTab"></component>
              </div>
            </form>
          </div>
        </div>
        <form action="" class="track-block">
          <h3 class="track-block__headline">Track a package</h3>
          <label class="track-block__label" for="">
            <input type="text" placeholder="Enter code">
            <span class="track-block__btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0909 10.5455C17.0909 11.9818 16.6283 13.31 15.8439 14.3894L20 18.5455L18.5455 20L14.3894 15.8439C13.31 16.6283 11.9818 17.0909 10.5455 17.0909C6.9305 17.0909 4 14.1604 4 10.5455C4 6.9305 6.9305 4 10.5455 4C14.1604 4 17.0909 6.9305 17.0909 10.5455ZM10.5 15C13 15 15 13.0909 15 10.5455C15 8 13 6 10.5455 6C8.09091 6 6 8 6 10.5455C6 13.0909 8 15 10.5 15Z" fill="#CCCCCC"/>
              </svg>
            </span>
          </label>
        </form>
      </div>
    </section>
    </div>


</template>
<style lang="less">
.main-block{
  &_tabs{
    padding-top: 0;
  }
  &__headline{
    font-family: 'Intro Bold', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
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
main{
  padding-bottom: 84px;
}
.main{
  //padding-top: 36px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 1302px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 100%;
  padding-left: 71px;
  column-gap: 40px;
  &-block{
    display: flex;
    flex-direction: column;
    width: 360px;
    max-width: 100%;
    padding-top: 36px;
    &:first-of-type{
      padding-top: 20px;
      width: 375px;
      max-width: 100%;
    }
    &__headline{
      margin:0;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      color: #1D253C;
    }
    &__descr{
      margin: 34px 0 34px 0;
      font-family: 'Intro Book', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #666;
    }
    &__btn{
      display: flex;
      align-items: center;
      column-gap: 8px;
      font-family: 'Intro Book', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      text-decoration: none;
      color: #2B6BF3;
    }
    &_tabs{
      padding-top: 0;
    }
  }
}
.demo-slider{
  display: flex;
  flex-direction: column;
  margin-top: 86px;
  &__title{
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    color: #1D253C;
    margin: 0;
  }
  .slider__list{
    margin-top: 22px;
    width: 375px;
    max-width: 100%;
    .slider__item{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 232px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      img.play-btn{
        position: absolute;
        height: 96px;
        width: 96px;
        margin: auto;
        z-index: 5;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

      }
      &:hover{
        img.play-btn{
          position: absolute;
          height: 96px;
          width: 96px;
          transform: scale(1.1);
        }
      }
      &:hover{
        .play-btn{
          transform: scale(2);
        }
      }
    }
  }
}
.tabs-block{
  display: flex;
  flex-direction: column;
  padding: 36px 32px 24px 32px;
  background-color: #fff;
  border:1px solid #B7C6E7;
  border-radius: 8px;
  &__up{
    display: flex;
    align-items: center;
    column-gap: 16px;
    position: relative;
    top: -7px;
  }
  &__headline{
    margin: 0;
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    color: #1D253C;
    font-family: "Intro Regular", sans-serif;
    position: relative;
  }
}
.tooltip-block{
  position: relative;
}
.tooltip-text{
  opacity: 0;
  z-index: -1;
  position: absolute;
  pointer-events: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #1d253c;
  border: 1px solid #B7C6E7;
  box-shadow: 0px 16px 16px 0px #4963B029;
  display: flex;
  width: max-content;
  height: max-content;
  background-color: #fff;
  max-width: 252px;
  top: calc(100% + 8px);
  right: calc(100% - 24px);
}
.tooltip{
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    svg{
      circle{
        fill:#1D253C!important
      }
    }
    ~.tooltip-text{
      opacity: 1;
      z-index: 2;
      pointer-events: unset;

    }
  }
}
.tabs-form{
  display: flex;
  flex-direction: column;
  &__btns{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  }
}
.tabs-btn{
  display: flex;
  height: 84px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 8px 12px;
  background-color: #EFF4FF;
  border: 1px solid #B7C6E7;
  &__img{
    display: flex;
    align-items: center;
    height: 30px;
    svg{
      margin: auto;
    }
    &_double{
      position: relative;
      &:before{
        content: '';
        position: absolute;
        background: url("../assets/slash.svg");
        background-size: 100%;
        right: -6px;
        /* transform: translateX(-62%); */
        top: 0;
        bottom: 0;
        font-size: 38px;
        left: 0;
        margin: auto;
        width: 11px;
        height: 38px;
      }
    }
  }
  &__block{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
  }
  &__text{
    text-align: center;
    margin-top: auto;
    color:#1D253C;
    opacity: 0.48;
    font-size: 12px;
    font-weight: 400;
  }
  &_active{
    background-color: #fff;
    .tabs-btn__text{
      opacity: 1;
    }
  }
  &:hover{
    opacity: 0.7;
    .tabs-btn__text{
      opacity: 1;
    }
  }
  &:first-of-type{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-of-type{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}
.tabs-form{
  &__block{
    //display: none;
    &_active{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
.input-container{
  margin-top: 34px;
  &__elem{
    &:first-of-type{
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
      align-items: center;
    }
  }
  &_grid{
    display: grid;
    width: 100%;
    grid-template-columns: 24px 1fr;
    column-gap: 16px;
    .grid-container__elem{
      &:first-of-type{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative;

      }
    }
  }
  &__label{
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 2px;
    margin-bottom: 37px;
    row-gap: 8px;
    &:last-of-type{
      margin-bottom: 0;
    }
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      height: 4px;
      left: 0;
      right: 0;
      width: 100%;
      border-radius: 4px;
      background-color: #2B6BF329;

    }
    input{
      height: 24px;
      font-family: 'Intro Book', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      border: none;
      &::placeholder{
        opacity: 0.56;
      }
      &:hover{
        &::placeholder{
          opacity: 1;
        }
      }
      &:focus{
        &::placeholder{
          opacity: 1;
        }
      }
    }
  }
  &__descr{
    font-family: 'Intro Book', sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.08em;
    text-align: left;
    color: #C4CEE5;
    text-transform: uppercase;
  }
}
.submit-block{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  &__btn{
    cursor: pointer;
    display: flex;
    height: 48px;
    align-items: center;
    column-gap: 8px;
    justify-content: center;
    padding: 8px;
    color: #fff;
    font-family: 'Intro Book', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    border-radius: 32px;
    background-color: #2B6BF3;
    &:hover{
      opacity: 0.75;
    }
    &_transparent{
      background-color: transparent;
      color: #999;
    }
  }
}
.track-block{
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 60px;
  box-shadow: 0px 8px 16px 0px #00000014;
  background-color: #FFDD2D;
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  height: max-content;
  &__btn{
    cursor: pointer;
    position: absolute;
    display: flex;
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    right: 0px;
    top: 0;
    bottom: 0;
  }
  &__headline{
    font-size: 22px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
    color: #1D253C;
  }
  &__label{
    margin-top: 8px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    height: 40px;
    position: relative;
    input{

      border-radius: 4px;
      border:none;
      width: 100%;
      height: 100%;
      background-color: #fff;
      font-family: 'Intro Book', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      display: flex;
      align-items: center;
      color:#1D253C;
      padding: 0 40px 0 16px;
      &::placeholder{
        opacity: 0.32;
      }
      &:hover{
        &::placeholder{
          opacity: 1;
        }
      }
      &:focus{
        &::placeholder{
          opacity: 1;
        }
      }
    }
  }
}
@media(max-width: 375px){
   main{
    padding-bottom: 52px;
  }
  .main{
    padding-left: 0;
    padding-top: 32px;
    row-gap: 46px;
  }
  .main-block{
    padding-top: 0;
    &:first-of-type{
      padding-top: 0;
    }
    &:nth-child(2){
      order: 1;
    }
    &:nth-child(1){
      order: 2;
      background-repeat: no-repeat;
      background-position: center 170px;
      background-size: contain;
      background-image: url("../assets/city.svg");
    }
    &__headline{
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      font-family: 'Intro Bold', sans-serif;
    }
    &__descr{
      margin: 14px 0;
    }
  }
  .demo-slider{
    margin-top: 37px;

  }
  .tabs-btn{
    height: 56px;
    &__text{
      display: none;
    }
  }
  .track-block{
    margin-top: 32px;
    padding: 24px 16px;
  }
  .tabs-form{
    &__btns{
      margin-top: 28px;
    }
  }
  .tooltip{
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      ~.tooltip-text{
        opacity: 1;
        z-index: 2;
        pointer-events: unset;
        right: calc(100% - 35vw);
      }
    }
  }
  .container_main{
    padding-bottom: 54px;
    background-image: none;
  }
  .tabs-block{
    padding: 40px 16px 24px;
  }
}
</style>
<script>
import VideoCarousel from "@/components/VideoCarousel.vue";
import ActiveTab1 from "@/components/ActiveTab1.vue";
import ActiveTab2 from "@/components/ActiveTab2.vue";
import ActiveTab3 from "@/components/ActiveTab3.vue";
export default {
  name: 'MainBlock',
  components: {
    VideoCarousel,
    ActiveTab1,
    ActiveTab2,
    ActiveTab3,

  },
  data() {
    return {
      location1: "",
      location2: "",
      setActiveTab: ActiveTab2,

    };

  },

  methods: {
    // resetInput() {
    //   this.location1 = "";
    //   this.location2 = "";
    // },
    // setActiveTab(newTab) {
    //   this.activeTab = newTab;
    // }
  },
}



</script>