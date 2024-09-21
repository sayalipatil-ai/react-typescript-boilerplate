module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'feat',    // Features
          'fix',     // Bug fixes
          'docs',    // Documentation changes
          'style',    // Code style changes (formatting, etc.)
          'refactor', // Code changes that neither fix a bug nor add a feature
          'perf',    // Performance improvements
          'test',    // Adding tests
          'chore',   // Other changes that don’t modify src or test files
        ],
      ],
    },
  };
  