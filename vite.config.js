import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { run } from "vite-plugin-run";
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        run([
            {
                name: "wayfinder",
                run: ["php", "artisan", "wayfinder:generate"],
                pattern: ["routes/**/*.php", "app/**/Http/**/*.php",
                    "Modules/*/routes/**/*.php",   // مسارات الراوتس داخل كل موديول
                    "Modules/*/app/**/Http/**/*.php" // الكود داخل app/Http في كل موديول
                ],
            },
        ]),
    ],
    resolve: {
        alias: {
            '@admin': resolve(__dirname, 'Modules/Admin/resources/assets/js'),
             '@vendor': resolve(__dirname, 'Modules/Vendor/resources/assets'),
             '@customer': resolve(__dirname, 'Modules/Customer/resources/assets'),
             '@finance': resolve(__dirname, 'Modules/Finance/resources/assets'),
          
         
         
        },
    },
 
});
