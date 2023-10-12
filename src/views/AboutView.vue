<script setup lang="ts">
import ArticleCard from '@/components/molecules/ArticleCard.vue'
import LinkRouter from '@/components/atoms/LinkRouter.vue'
import IconBack from '@/components/icons/IconBack.vue'
import { version } from '../../package.json'
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
      <h3 class="font-bold">ご注意</h3>
      <p>服装の提案ロジックについては現在調整中となっておりますのでお気をつけください。</p>
      <p>また、現在のところ子供向けの設定のためやや薄着の傾向となっています。</p>
      <p>
        より最適な提案ができるように改善するとともに、今後のアップデートで個人ごとに微調整できる機能の実装も考えております。
      </p>
    </section>
    <section>
      <h3 class="font-bold">利用させていただいている技術について</h3>
      <p>
        このアプリケーションは気象庁ホームページの情報を取得し、利用させていただいております。（気温と天気の予想・地域の分類）https://www.jma.go.jp/
      </p>
      <p>
        また、衣類のイラストは「いらすとや」から利用させていただきました。https://www.irasutoya.com/
      </p>
      <p>
        また、アプリ内のアイコンについてはTailwind
        Toolboxから利用しています。https://www.tailwindtoolbox.com/icons
      </p>
    </section>
    <section>
      <h3 class="font-bold">バージョン情報</h3>
      <p>
        {{ version }}
      </p>
    </section>
    <section class="text-center">
      <LinkRouter to="/" class="rounded-sm">
        <div class="flex"><IconBack />もどる</div>
      </LinkRouter>
    </section>
  </ArticleCard>
</template>
