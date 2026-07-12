import { install } from "element-plus";
import { useIntersectionObserver } from '@vueuse/core'
import { lo } from "element-plus/es/locales.mjs";
export const lazyPlugin = {
    install (app) {
        app.directive('img-lazy', {
        mounted (el, binding) {
            const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value
                    stop()
                }
            },
            )
        }
})
    }
}