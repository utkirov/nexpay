<template>
  <div class="transactions">
    <navigation-the-top-title title="Transactions"/>

    <div class="transactions__container">
      <page-components-profile-transaction
          v-for="transaction in list" :key="transaction.id"
          :transaction="transaction"
      />
    </div>
  </div>
</template>

<script setup>
import {useTransaction} from "~/stores/transactions.js";

const store = useTransaction()

const currentPage = computed(() => store.currentPage)
const lastPage = computed(() => store.lastPage)
const list = computed(() => store.list)

onMounted(() => {
  store.getTransactions()
})
definePageMeta({
  layout: 'no-bottom-navigation-bar'
})
</script>

<style scoped>
.transactions {
  @apply mt-[124px]
}

.transactions__container {
  @apply flex flex-col gap-[15px]
}
</style>