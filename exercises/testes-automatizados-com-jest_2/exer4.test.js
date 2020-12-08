const getRepos = require('./exer4');

test('if project is included in the list', () => {
    return getRepos('https://api.github.com/users/tryber/repos').then((repos) => {
        expect(repos).toContain('sd-01-week4-5-project-todo-list');
        expect(repos).toContain('sd-01-week4-5-project-meme-generator');
    });
});