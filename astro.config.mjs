import { defineConfig } from 'astro/config';

// https://astro.build/config
const subfolder = '/umeya/'
export default defineConfig({
    base: subfolder,
    outDir: `./dist${subfolder}`,

});
