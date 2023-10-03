<script setup lang="ts">
import router from '@/router'
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconBack from '@/components/icons/IconBack.vue'
</script>

<template>
  <ArticleCard class="text-left flex flex-col gap-4">
    <section>
      <h2 class="text-lg font-bold">Nanikiru? について</h2>
      <p>幼いこどもに保育園や幼稚園に着せていく服を選ぶのって難しいですよね？</p>
      <p>
        特に春や秋は気温が意外と暑かったり、寒かったりで毎日気温をチェックして、服装を考えるのは手間がかかります。
      </p>
      <p>
        このアプリはそんな忙しい親御さんのために、一目で気温と服装の目安がわかるように開発されました。
      </p>
      <p>もちろん、おとなの方のお洋服選びにもご利用ください。</p>
      <p>ぜひ、スマホのディスクトップにブックマークして役立ててください。</p>
    </section>
    <section>
      <h3 class="font-bold">利用させていただいている技術について</h3>
      <p>
        このアプリケーションは気象庁ホームページの情報を取得し、利用させていただいております。（気温・天気予想・地域の分類）https://www.jma.go.jp/
      </p>
      <p>
        また、衣類のイラストは「いらすとや」から利用させていただきました。https://www.irasutoya.com/
      </p>
      <p>
        また、アプリ内のアイコンについてはTailwind
        Toolboxから利用しています。https://www.tailwindtoolbox.com/icons
      </p>
    </section>
    <section class="text-center">
      <LinkRouter to="/" class="rounded-sm">
        <div class="flex"><IconBack />もどる</div>
      </LinkRouter>
    </section>
  </ArticleCard>
</template>
