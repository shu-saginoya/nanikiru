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
    <AChip v-if="today === dateFormat" class="bg-orange-300">きょう</AChip>
    <AChip v-if="tomorrow === dateFormat" class="bg-yellow-300">あした</AChip>
    {{ dateFormat }}
  </div>
</template>
