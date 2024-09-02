<script setup lang="ts">
useHead({
    meta: [{
        name: 'theme-color',
        content: '#17153B'
    }]
})
</script>
<template>

    <div class="mobile-container">
        <navigation-the-top/>

        <slot>

        </slot>
        <navigation-the-bottom/>
    </div>

</template>

<style scoped>

.mobile-container {
    @apply mx-auto max-w-[500px] relative

}

</style>
<script setup lang="ts">
</script>