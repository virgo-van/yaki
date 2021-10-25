import YaButton from "./Button/YaButton.vue";
import YaCheckbox from "./Checkbox/YaCheckbox.vue";
import YaCheckboxGroup from "./Checkbox/YaCheckboxGroup.vue";

const YakiUI = {
    install: (Vue) => {
        Vue.component(YaButton.name, YaButton)
        Vue.component(YaCheckbox.name, YaCheckbox)
        Vue.component(YaCheckboxGroup.name, YaCheckboxGroup)
    }

}

export default YakiUI
