import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T, extra?: Record<string, any>) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        const name = (comp as any).name
        app.component(name, comp as SFCWithInstall<T>)
        if (extra) {
            for (const [key, comp] of Object.entries(extra)) {
                (app.component(key, comp))
            }
        }
    }
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (comp as any)[key] = comp
        }
    }
    return comp as SFCWithInstall<T>
}

export const withNoopInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = () => { }
    return component as SFCWithInstall<T>
}

export const makeInstaller = (components: Plugin[] = []) => {
    const install = (app: App) => {
        components.forEach((c) => app.use(c))
    }
    return {
        install,
    }
}

export const withInstallFunction = <T>(fn: T, name: string): SFCWithInstall<T> => {
    (fn as SFCWithInstall<T>).install = (app: App) => {
        app.config.globalProperties[name] = fn
    }
    return fn as SFCWithInstall<T>
}
