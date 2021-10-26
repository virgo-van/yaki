import YaButton from "./Button/YaButton.vue";
import YaCheckbox from "./Checkbox/YaCheckbox.vue";
import YaCheckboxGroup from "./Checkbox/YaCheckboxGroup.vue";
import YaRadio from "./Radio/YaRadio.vue";
import YaRadioGroup from "./Radio/YaRadioGroup.vue";
import YaSwitch from "./Switch/YaSwitch.vue";
import YaInput from "./Input/YaInput.vue";

const YakiUI = {
    install: (Vue) => {
        Vue.component(YaButton.name, YaButton)
        Vue.component(YaCheckbox.name, YaCheckbox)
        Vue.component(YaCheckboxGroup.name, YaCheckboxGroup)
        Vue.component(YaRadio.name, YaRadio)
        Vue.component(YaRadioGroup.name, YaRadioGroup)
        Vue.component(YaSwitch.name, YaSwitch)
        Vue.component(YaInput.name, YaInput)
    }
}

export default YakiUI
