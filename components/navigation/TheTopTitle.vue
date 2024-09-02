<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
    <header>
        <nav class="navigation">
            <div class="navigation__icon">
                <button @click="$router.back()">
                    <PhosphorIconCaretLeft :size="24" color="#fff"/>
                </button>
            </div>
            <div class="navigation__title">
                <h1>
                    {{ props.title }}
                </h1>
            </div>
            <div class="navigation__offsett">

            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
  @apply fixed top-0 left-0 flex justify-center items-center w-full
}

header .navigation {
  @include border-glass(0, 1);
  @include max-screen-width();
  @include navigation-styles(flex);
  @apply pt-[50px]

}

.navigation__icon, .navigation__offsett {
  @apply w-[40px]
}

.navigation__title {
  h1 {
    @apply text-lg font-bold
  }
}
</style>