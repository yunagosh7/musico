// feat: A new feature
// fix: A bug fix
// chore: updating grunt tasks etc; no production code change
// docs: Documentation only changes
// refactor: A code change that neither fixes a bug nor adds a feature
// test: Adding missing tests or correcting existing tests

/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-empty': [0, 'never'],
		'header-full-stop': [0],
		'body-full-stop': [0],
		'subject-full-stop': [0],
		'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'test', 'refactor']],
	},
};
