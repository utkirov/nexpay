<template>
    <div class="history">
        <navigation-the-top-title title="History"/>

        <div class="history__container">
            <page-components-profile-transaction
                    title="Пополнение"
                    price="+50 000"
                    data="23:59, 07.02.2022"
            />

            <page-components-profile-transaction
                    title="Пополнение"
                    price="+50 000"
                    data="23:59, 07.02.2022"
            />

            <page-components-profile-transaction
                    title="Пополнение"
                    price="+50 000"
                    data="23:59, 07.02.2022"
            />
        </div>
        <div class="bottom__bar">
            <div class="bottom__bar-container">
                <nuxt-link v-wave to="/recharge">
                    <PhosphorIconHandWithdraw :size="24" color="#fff"/>
                    Пополнить
                </nuxt-link>
                <nuxt-link v-wave to="/recharge/history">
                    <PhosphorIconClockCounterClockwise :size="24" color="#fff"/>
                    История
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

definePageMeta({
    layout: 'no-bottom-navigation-bar'
})
</script>

<style scoped>
.history {
    @apply mt-[124px]
}

.history__container {
    @apply flex flex-col gap-[15px]
}
</style>