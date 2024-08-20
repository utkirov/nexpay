<template>
  <header>
    <nav class="navigation ">
      <div class="navigation__actions">
        <button>
          <PhosphorIconHeadset :size="24" color="#fff"/>
        </button>
        <button>
          <PhosphorIconBell :size="24" color="#fff"/>
        </button>
      </div>

      <div class="navigation__logo">
        <nuxt-link to="/">
          <img src="/logo.png">
        </nuxt-link>
      </div>

      <div class="navigation__avatar">
        <nuxt-link to="/profile">
          <img src="/user.png">
        </nuxt-link>
      </div>


    </nav>
  </header>

</template>

<script setup lang="ts">

</script>


<style lang="scss">

header {
  @apply fixed top-0 left-0 flex justify-center items-center w-full
}

header .navigation {
  @include border-glass(0, 1);
  @include max-screen-width();
  @include navigation-styles(flex);

}

.navigation .navigation__actions button svg {
  @include transitions;
  @apply hover:fill-secondary-color

}

.navigation__actions {
  @apply flex gap-[10px] w-[60px]
}

.navigation__avatar {
  @apply w-[60px] flex justify-end
}

.navigation__avatar img {
  @apply w-[40px]
}

.navigation__logo img {
  @apply max-w-[120px]
}

</style>