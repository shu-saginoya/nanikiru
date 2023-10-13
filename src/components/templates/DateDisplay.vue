<script setup lang="ts">
import { computed } from 'vue'
import { useDay } from '@/composables/utils/useDay'
import AChip from '@/components/elements/AChip.vue'

const props = defineProps<{
  date: string
}>()

const dateFormat = computed(() => useDay(props.date).formatJa)
const today = computed(() => useDay('now').formatJa)
const tomorrow = computed(() => useDay('tomorrow').formatJa)
</script>

<template>
  <div>
    <AChip v-if="today === dateFormat" color="amber">きょう</AChip>
    <AChip v-if="tomorrow === dateFormat" color="pink">あした</AChip>
    {{ dateFormat }}
  </div>
</template>
