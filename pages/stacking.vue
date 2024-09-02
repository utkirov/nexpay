<script setup lang="ts">
definePageMeta({
    layout: 'no-bottom-navigation-bar'
})

import {useStacking} from "@/stores/stacking";

const store = useStacking()
await store.getStacking()

const levels = store.levels




</script>

<template>
    <navigation-the-top-title title="Stacking" />

    <section class="stacking">

        <div class="stacking__body" v-if="levels">
            <page-components-stacking-levels
                    v-for="level in levels" :key="level.id"
                    :is_active=level.is_active
                    :name="level.name"
                    :days="level.days"
                    :expire_at=level.expire_at
                    :price="level.price"
                    :percent="level.percent"

            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.stacking {
  @apply mt-[124px] pb-[50px]
}

.stacking__body {
  @apply flex flex-col gap-[15px]
}
</style>