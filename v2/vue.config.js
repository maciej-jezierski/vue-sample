module.exports = {
    filenameHashing: false,
    // delete HTML related webpack plugins
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }
}