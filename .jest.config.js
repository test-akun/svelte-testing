export const moduleFileExtensions = ['js', 'svelte'];
export const transform = {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'svelte-jester',
};
export const verbose = true;
export const bail = false;