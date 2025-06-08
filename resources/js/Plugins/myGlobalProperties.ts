import type { App } from 'vue';

export const myGlobalProperties = {
    install(app:App) {
    
        /**
         * this method for upper case first letter in string
         * @param string str
         * @returns string
         */
        app.config.globalProperties.$ucfirst =  (str:string) => {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1);
          }
    }
  }