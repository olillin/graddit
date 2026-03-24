import CleanCSS from 'clean-css'
import { defineConfig } from 'rolldown'
import copy from 'rollup-plugin-copy'

export default defineConfig({
    input: 'public/app.js',
    platform: 'browser',
    output: {
        file: 'dist/public/app.js',
        minify: true,
    },
    plugins: [
        copy({
            targets: [
                {
                    src: 'public/*',
                    dest: 'dist/public',
                },
                {
                    src: 'public/style.css',
                    dest: 'dist/public',
                    transform: (contents) => new CleanCSS().minify(contents).styles
                },
                {
                    src: 'public/zyzol.css',
                    dest: 'dist/public',
                    transform: (contents) => new CleanCSS().minify(contents).styles
                },
            ]
        })
    ]
})
