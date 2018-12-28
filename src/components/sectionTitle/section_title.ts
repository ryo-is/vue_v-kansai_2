import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class SectionTitle extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    why: {
      mainText: "なぜ布教活動？",
      prebLink: "/mainContents/summary",
      nextLink: "/mainContents/why_1"
    },
    action: {
      mainText: "なにをしたか",
      prebLink: "/mainContents/why_6",
      nextLink: "/mainContents/action_1"
    },
    result: {
      mainText: "結果というか中間報告",
      prebLink: "/mainContents/action_2",
      nextLink: "/mainContents/result_1"
    },
    hereafter: {
      mainText: "今後の目標",
      prebLink: "/mainContents/result_1",
      nextLink: "/mainContents/hereafter_1"
    },
    end: {
      mainText: "EOF",
      prebLink: "/mainContents/hereafter_1",
      nextLink: "/"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageName: string = "";
  pageTitleText: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.pageTitleText = this.contents[this.pageName].mainText;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
