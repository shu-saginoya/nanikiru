<script setup lang="ts">
import ACard from '@/components/elements/ACard.vue'
import AContainer from '@/components/elements/AContainer.vue'
import SectionAbout from '@/components/implications/SectionAbout.vue'
import SectionNotes from '@/components/implications/SectionNotes.vue'
import SectionReference from '@/components/implications/SectionReference.vue'
import SectionVersion from '@/components/implications/SectionVersion.vue'
import SectionReturnHome from '@/components/implications/SectionReturnHome.vue'
</script>

<template>
  <ACard>
    <AContainer>
      <SectionAbout />
      <SectionNotes />
      <SectionReference />
      <SectionVersion />
      <SectionReturnHome />
    </AContainer>
  </ACard>
</template>
