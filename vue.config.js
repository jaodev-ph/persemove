module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: "@import '~@/assets/scss/_main.scss';"
            }
        }
    },
    transpileDependencies: [
        "vuetify"
    ]
}