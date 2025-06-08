import '../css/app.css';
import './bootstrap';
import.meta.glob('./template/*.js');
import { createInertiaApp, usePage } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, DefineComponent, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createI18n } from 'vue-i18n'
import en from './lang/en.json'
import { resolveVuePage } from './page-resolver';
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import { myGlobalProperties } from '@/Plugins/myGlobalProperties';




// import ar from './lang/ar.json'


// تحميل اللغة المحفوظة من sessionStorage أو استخدام 'en' كافتراضية
const locale = sessionStorage.getItem('locale') || 'en'

const i18n = createI18n({
    legacy: false, // ضروري للإصدار 9+
    locale: locale,
    fallbackLocale: 'en',
    messages: { 
        en,
        // ar
         }
})

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia()


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolveVuePage(name), // Past this
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
      
            .use(ZiggyVue)
            .use(i18n)
            .use(pinia)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        darkModeSelector: false || 'none',
                    }
                }
            })
            .use(ToastService)
            .use(myGlobalProperties)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
