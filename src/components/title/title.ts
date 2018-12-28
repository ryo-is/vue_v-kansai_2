import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Title extends Vue {
  titleText: string = "Vue.js布教活動報告";
  transitionPageInfo: transitionPageInfoType = {
    preb: "/sectionTitle/end",
    next: "/selfIntroduction"
  };
}
