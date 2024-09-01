<template>
  <footer>
    <nav class="nav">
      <nuxt-link exact to="/" class="nav__item">
        <div class="nav__item-icon">
          <PhosphorIconHouseLine :size="32" color="#fff"/>
        </div>
        <div class="nav__item-title">
          <h4>
            Домой
          </h4>
        </div>
      </nuxt-link>
      <nuxt-link exact to="/grab" class="nav__item ">
        <div class="nav__item-icon">
          <PhosphorIconRocketLaunch :size="32" color="#fff"/>
        </div>
        <div class="nav__item-title">
          <h4>
            Заработок
          </h4>
        </div>
      </nuxt-link>
      <nuxt-link exact to="/team" class="nav__item ">
        <div class="nav__item-icon">
          <PhosphorIconUsersThree :size="32" color="#fff"/>
        </div>
        <div class="nav__item-title">
          <h4>
            Члены
          </h4>
        </div>
      </nuxt-link>
      <nuxt-link exact to="/profile" class="nav__item ">
        <div class="nav__item-icon">
          <PhosphorIconList :size="32" color="#fff"/>
        </div>
        <div class="nav__item-title">
          <h4>
            Меню
          </h4>
        </div>
      </nuxt-link>


    </nav>
  </footer>
</template>

<style lang="scss" scoped>

footer {
  @apply fixed bottom-0 left-0 flex justify-center items-center w-full
}

footer .nav {
  @include border-glass(1, 0);
  @include max-screen-width();
  @include navigation-styles(grid);
  @apply py-[2px]


}

.nav .nav__item {
  @apply flex justify-center flex-col items-center gap-[2px] w-[90px]  py-3
}

.nav .nav__item .nav__item-icon svg, .nav .nav__item .nav__item-title h4 {
  @include transitions();
}

.nav .nav__item.active {
  @include border-glass(0, 1);
}

.nav .nav__item.active .nav__item-icon svg {
  @apply fill-secondary-color
}

.nav .nav__item {
  &:hover {
    .nav__item-icon svg {
      fill: #FBBC04;
    }

    .nav__item-title h4 {
      opacity: 100;
    }
  }
}

.nav .nav__item.active .nav__item-title h4 {
  @apply opacity-100
}

.nav .nav__item .nav__item-title h4 {
  @apply text-[12px] font-medium text-pure-white/60 opacity-0 w-full
}

.router-link-active .nav__item-title h4 {
  opacity: 1 !important;
}

.router-link-active .nav__item-icon svg {
  @apply fill-secondary-color


}


</style>

<script setup lang="ts">
</script>