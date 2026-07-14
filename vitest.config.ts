import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            include: ['src/**'],
            exclude: ['src/**/*.test.ts', 'src/helper_data.ts'],
            reporter: ['text', 'lcov'],
        },
    },
});
