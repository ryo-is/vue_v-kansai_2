import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class Introduction extends Vue {
  pageTitleText: string = "自己紹介";
  nameText: string[] = ["Ryosuke Izumi", "is_ryo"];
  jobsText: string[] = ["IoT", "FrontEnd"];
  communitiesText: string[] = ["v-kansai", "JAWS-UG", "Node学園"];
  transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: "/"
  };
}
