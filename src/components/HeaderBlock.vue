<template>
  <header class="header">
    <div class="container container_header">
      <div class="header__block header__block_logo">
        <a href="/" class="logo-link" title="Whoosh">
          <img src="../assets/logo.svg" alt="logo" title="Whoosh">
        </a>
        <div class="location">
          <a href="javascript:void(0);" class="location__btn js-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6C13 6.57825 12.721 7.43892 12.1734 8.50282C11.6424 9.53439 10.9235 10.6362 10.1881 11.6588C9.45537 12.6777 8.72044 13.5984 8.1676 14.2653C8.10961 14.3353 8.05367 14.4024 8 14.4665C7.94633 14.4024 7.89039 14.3353 7.8324 14.2653C7.27956 13.5984 6.54463 12.6777 5.81186 11.6588C5.07648 10.6362 4.3576 9.53439 3.82663 8.50282C3.27902 7.43892 3 6.57825 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="#C2D2F4" stroke-width="2"/>
              <path d="M13 6C13 6.57825 12.721 7.43892 12.1734 8.50282C11.6424 9.53439 10.9235 10.6362 10.1881 11.6588C9.45537 12.6777 8.72044 13.5984 8.1676 14.2653C8.10961 14.3353 8.05367 14.4024 8 14.4665C7.94633 14.4024 7.89039 14.3353 7.8324 14.2653C7.27956 13.5984 6.54463 12.6777 5.81186 11.6588C5.07648 10.6362 4.3576 9.53439 3.82663 8.50282C3.27902 7.43892 3 6.57825 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="#B7C6E7" stroke-width="2"/>
            </svg>
            <span>NY, Manhattan</span>
            <div class="location__list js-location-list">

            </div>
          </a>
        </div>
      </div>
      <div class="header__block header__block_tracker">
        <form action="" class="header-tracker">
          <input type="text" class="header-tracker__input" placeholder="Track a Package">
          <a href="javascript:void(0);" class="header-tracker__btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7 12.6667C10.2217 12.6667 12.6667 10.2217 12.6667 7C12.6667 3.77834 10.2217 1.33333 7 1.33333C3.77834 1.33333 1.33333 3.77834 1.33333 7C1.33333 10.2217 3.77834 12.6667 7 12.6667Z" fill="#B7C6E7"/>
              <path d="M7.33325 10L10.6666 8.66667V5.33333L7.33325 6.51254V10Z" fill="#B7C6E7"/>
              <path d="M6.66675 10L3.33341 8.66667V5.33333L6.66675 6.51254V10Z" fill="#B7C6E7"/>
              <path d="M6.99992 3.33333L3.33325 4.66667L6.99992 6L10.6666 4.66667L6.99992 3.33333Z" fill="#B7C6E7"/>
              <path d="M11.9523 11L16 15.0477L15.0477 16L11 11.9523L11.9523 11Z" fill="#B7C6E7"/>
            </svg>
          </a>
        </form>
      </div>
      <div class="header__block header__block_personal">
        <a href="javascript:void(0);" class="personal-link personal-link_text">Send a Parcel</a>
        <a href="javascript:void(0);" class="personal-link personal-link_text">Become a Courier</a>
        <a href="javascript:void(0);" class="personal-link personal-link_btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.02756 2 4 3.67893 4 5.75V7H3.71429C3.3198 7 3 7.33579 3 7.75V13.25C3 13.6642 3.3198 14 3.71429 14H12.2857C12.6802 14 13 13.6642 13 13.25V7.75C13 7.33579 12.6802 7 12.2857 7H12V5.75C12 3.67893 9.97244 2 8 2ZM8 4C6.81653 4 6 5 6 5.75V7H10V5.75C10 5 9.18347 4 8 4Z" fill="white"/>
          </svg>
        </a>
      </div>

    </div>


  </header>
</template>

<script>
export default {
  name: 'HeaderBlock',

}
</script>