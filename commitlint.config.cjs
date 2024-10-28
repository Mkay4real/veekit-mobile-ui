// const jiraTicketRegex = /^[A-Z]+-\d+$/;
const jiraTicketRegex =  /^.+([A-Z]+-\d+): .+/;

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [
            2,
            'always',
            [
                'lower-case',
                'upper-case',
                'camel-case',
                'kebab-case',
                'pascal-case',
                'sentence-case',
                'snake-case',
                'start-case',
            ]
        ],
        "header-max-length": [2, "always", 72],
        "type-enum": [
            2,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "perf",
                "test",
                "chore",
                "build",
                "ci",
                "revert"
            ]
        ],
        // 'jira-issue-format': [2, 'always', /^([A-Z]+-\d+): .+/]
        "jira-issue-format": [2, "always", "^.+([A-Z]+-\\d+): .+"]
    },
    // parserPreset: {
    //     parserOpts: {
    //         headerPattern: /^([A-Z]+-\d+)\s*:\s*(\w*): (.*)$/,
    //         headerCorrespondence: ['ticket', 'type', 'subject'],
    //     },
    // },
    plugins: [
        {
            rules: {
                // 'jira-ticket-format': (parsed) => {
                //     const ticket = parsed.ticket;
                //     if (!jiraTicketRegex.test(ticket)) {
                //         return [
                //             false,
                //             `Wrong format".`,
                //         ];
                //     }
                //     return [true];
                // },
                'jira-issue-format': ({ header }) => {
                    const isValid = jiraTicketRegex.test(header);
                    return [
                        isValid,
                        isValid ? null : 'Header must be in the format "PROJECT-123: message".'
                    ];
                }
            },

        }
    ]
};
