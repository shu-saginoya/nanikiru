<script setup lang="ts">
import ACard from '@/components/elements/ACard.vue'
import AContainer from '@/components/elements/AContainer.vue'
import SectionAbout from '@/components/contents/SectionAbout.vue'
import SectionNotes from '@/components/contents/SectionNotes.vue'
import SectionReference from '@/components/contents/SectionReference.vue'
import SectionVersion from '@/components/contents/SectionVersion.vue'
import SectionReturnHome from '@/components/contents/SectionReturnHome.vue'
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
