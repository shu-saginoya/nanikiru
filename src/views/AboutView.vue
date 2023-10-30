<script setup lang="ts">
import ACard from '@/components/elements/ACard.vue'
import AContainer from '@/components/elements/AContainer.vue'
import AHeadingLv2 from '@/components/elements/AHeadingLv2.vue'
import SectionAbout from '@/components/implications/SectionAbout.vue'
import SectionNotes from '@/components/implications/SectionNotes.vue'
import SectionReference from '@/components/implications/SectionReference.vue'
import SectionVersion from '@/components/implications/SectionVersion.vue'
import SectionReturnHome from '@/components/implications/SectionReturnHome.vue'
</script>

<template>
  <ACard>
    <AContainer>
      <AHeadingLv2>About</AHeadingLv2>
      <SectionAbout />
      <SectionNotes />
      <SectionReference />
      <SectionVersion />
      <SectionReturnHome />
    </AContainer>
  </ACard>
</template>
