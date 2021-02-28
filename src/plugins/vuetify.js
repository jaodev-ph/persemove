import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'fa'
    },
    theme: {
        themes: {
            dark: {
                background: colors.grey.lighten3
            },
            light: {
                background: colors.shades.white
            }
        }
    }
});