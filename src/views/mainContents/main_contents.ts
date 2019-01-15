import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";
import PageTitle from "@/components/pageTitle/PageTitle.vue";
import PageContent from "@/components/pageContent/PageContent.vue";

@Component({
  components: {
    PageTitle,
    PageContent
  },
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class MainContents extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  basicContent: boolean = true;
  contents: pageContentsType = {
    summary: {
      mainText: "社内でのVue.js布教活動報告します",
      mainTitle: "今日のお話",
      prebLink: "/selfIntroduction",
      nextLink: "/sectionTitle/why"
    },
    why_1: {
      mainText: "そもそも私が趣味で始めた Vue.js",
      mainTitle: "なぜ布教活動？",
      prebLink: "/sectionTitle/why",
      nextLink: "/mainContents/why_2"
    },
    why_2: {
      mainText: "すごくハマった",
      mainTitle: "なぜ布教活動？",
      prebLink: "/mainContents/why_1",
      nextLink: "/mainContents/why_3"
    },
    why_3: {
      mainText: "独断で自社アプリをリプレイスした",
      mainTitle: "なぜ布教活動？",
      prebLink: "/mainContents/why_2",
      nextLink: "/mainContents/why_4"
    },
    why_4: {
      mainText: "今後 Vue.js でやっていきたい… (jQuery書きたくない…)",
      mainTitle: "なぜ布教活動？",
      prebLink: "/mainContents/why_3",
      nextLink: "/mainContents/why_5"
    },
    why_5: {
      mainText: "Vue.js を布教すればいいのでは？",
      mainTitle: "なぜ布教活動？",
      prebLink: "/mainContents/why_4",
      nextLink: "/mainContents/why_6"
    },
    why_6: {
      mainText: "やっていくぞ",
      mainTitle: "なぜ布教活動？",
      prebLink: "/mainContents/why_5",
      nextLink: "/sectionTitle/action"
    },
    action_1: {
      mainText: "",
      mainTitle: "なにをしたか",
      prebLink: "/sectionTitle/action",
      nextLink: "/mainContents/action_2"
    },
    action_2: {
      mainText: "",
      mainTitle: "なにをしたか",
      prebLink: "/mainContents/action_1",
      nextLink: "/mainContents/action_3"
    },
    action_3: {
      mainText: "",
      mainTitle: "なにをしたか",
      prebLink: "/mainContents/action_2",
      nextLink: "/sectionTitle/result"
    },
    result_1: {
      mainText: "今後の案件で Vue.js を採用することが決まった(というか決めた)",
      mainTitle: "結果というか中間報告",
      prebLink: "/sectionTitle/result",
      nextLink: "/sectionTitle/hereafter"
    },
    hereafter_1: {
      mainText: "Vue.js に対して熱意を注げる人を探したい・育てたい",
      mainTitle: "今後の目標",
      prebLink: "/sectionTitle/hereafter",
      nextLink: "/sectionTitle/end"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageContentText: string = "";
  pageName: string = "";
  pageTitleText: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.pageContentText = this.contents[this.pageName].mainText;
    this.pageTitleText = this.contents[this.pageName].mainTitle as string;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
