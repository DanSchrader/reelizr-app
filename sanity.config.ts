import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: '5cyg4m98',
    dataset: 'production',
    title: 'Reelizr App Studio',
    apiVersion: '2023-05-13',
    basePath: '/admin',
    plugins: [deskTool()],
});

export default config;