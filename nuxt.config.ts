// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "@/assets/css/styles.css",
         ],
    
    app: {
        head: {
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js",
                    type: "text/javascript"
                }
            ]
        }
    },
 

})
