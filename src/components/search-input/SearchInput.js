import { mixin as focusMixin }  from 'vue-focus';

export default {
    mixins: [ focusMixin ],
    name: 'search-input',
    data() {
        return {
            focused: false
        };
    }
}