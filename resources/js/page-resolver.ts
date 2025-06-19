
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {DefineComponent} from "vue";

export function resolveVuePage(name: string):Promise<any> {
   
    const parts: string[] = name.split('::')
    if (parts.length > 1) {
      
        const modules = import.meta.glob('../../Modules/**/Pages/**/*.vue')
        const modulePath: string[] = Object.keys(modules)
        const modulePages: { [key: string]: string } = {}
        modulePath.map((path: string): void => {
            const pathParts: string[] = path.replace('../../Modules/', '')
            .split('/')
            const moduleName: string = pathParts.shift() as string
            // @ts-ignore
            const pageName: string = pathParts.slice(4)
            .join('/')
            .replace('.vue', '')
            const key: string = `${moduleName}::${pageName}`
         
            modulePages[key] = path
        })
       
      
       
        if (Object.keys(modulePages).includes(name)) {
            const path = modulePages[name]
            return resolvePageComponent(path, import.meta.glob<DefineComponent>('../../Modules/**/Pages/**/*.vue'))
        }
    }
    return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue'))
}