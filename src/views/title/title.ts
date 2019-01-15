import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Title extends Vue {
  titleText: string = "Vue.jsの布教活動をしている話";
  transitionPageInfo: transitionPageInfoType = {
    preb: "/sectionTitle/end",
    next: "/selfIntroduction"
  };
}
