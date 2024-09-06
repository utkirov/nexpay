<script setup lang="ts">
const props = defineProps(["total", "refer"]);
const emit = defineEmits(["share"]);

const share = function () {
  emit("share");
};
</script>

<template>
  <section class="invite">
    <utils-the-container-title :title="$t('teams.invitation.title')" />
    <div class="invite__refer" @click="share()">
      <div class="invite__refer-title">
        <h2>{{ $t("teams.invitation.button") }}</h2>
      </div>
      <div class="invite__refer-code">
        {{ refer.invite_code }}
        <PhosphorIconCopy :size="24" color="#fff" />
      </div>
    </div>
    <p class="text-center">
      {{ $t("teams.invitation.info") }}
    </p>
    <!-- <div class="invite__button">
      <button v-wave @click="share">
        {{ $t('teams.invitation.button') }}
      </button>
     
    </div> -->

    <nuxt-link
      :to="localeLocation('/team/referrals')"
      class="success__invitation"
      v-wave
    >
      <div class="success__invitation-title">
        <PhosphorIconLink :size="24" color="#fff" />
        {{ $t("teams.invitation.successfull") }}
      </div>
      <div class="success__invitation-value">
        {{ props.total }} {{ $t("teams.invitation.people") }}
        <PhosphorIconCaretRight :size="24" color="#fff" />
      </div>
    </nuxt-link>
  </section>
</template>

<style scoped lang="scss">
.invite__refer-code {
  @apply flex gap-2;
}
.invite__refer {
  @apply p-4 text-primary-color rounded-3xl flex cursor-pointer justify-between mb-2 font-bold;
}
.invite__refer svg {
  @apply fill-primary-color;
}

.invite__refer-title {
  @apply flex;
}
.invite__refer-title h2 {
  @apply font-bold;
}
.invite {
  @apply mt-[30px];
}

.invite__refer {
  background: linear-gradient(90deg, #fbbc04 0%, #fff1ca 100%);
}

.invite__button button {
  @include transitions();
  @apply p-[15px] text-base leading-[24px] flex justify-center font-bold w-full rounded-3xl text-primary-color active:scale-95;
}

.invite__button {
  @apply flex flex-col gap-[10px] text-pure-white/65 text-center;
}

.success__invitation {
  @include transitions();
  @apply p-[20px] text-base leading-[24px] flex w-full bg-pure-white/5 rounded-3xl items-center justify-between active:scale-95 mt-[20px];
}

.success__invitation-title {
  @apply flex gap-[5px];
}

.success__invitation-value {
  @apply flex gap-[5px] font-bold;
}
</style>
