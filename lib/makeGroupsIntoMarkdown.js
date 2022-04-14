"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("./shared");
const noWorkMessage = 'No work items';
const makeGroupsIntoMarkdown = (groupGroups, username, startDate) => {
    const now = new Date();
    const markdownBodyArr = [
        `# @${username}'s update for ${(0, shared_1.formatDate)(startDate)} - ${(0, shared_1.formatDate)(now)}\n\n`,
    ];
    const primaryArr = [
        '## Primary Work\n\nThis usually refers to work that you created, started, and drove forward\n\n',
    ];
    const secondaryArr = [
        '## Secondary Work\n\nThis usually refers to reviews, contributions to other\'s PRs, and other secondary work\n\n',
    ];
    const unknownArr = [
        '## Unknown Work\n\n'
    ];
    groupGroups.forEach(groups => {
        Object.values(groups.primary).forEach(primaryVal => {
            primaryArr.push(`### ${primaryVal.groupTitle}\n`);
            primaryVal.artifacts.forEach(lineItem => primaryArr.push(`- [${lineItem.title}](${lineItem.url})\n`));
        });
        Object.values(groups.secondary).forEach(secondaryVal => {
            secondaryArr.push(`### ${secondaryVal.groupTitle}\n`);
            secondaryVal.artifacts.forEach(lineItem => secondaryArr.push(`- [${lineItem.title}](${lineItem.url})\n`));
        });
        Object.values(groups.unknown).forEach(unknownVal => {
            unknownArr.push(`### ${unknownVal.groupTitle}\n`);
            unknownVal.artifacts.forEach(lineItem => unknownArr.push(`- [${lineItem.title}](${lineItem.url})\n`));
        });
    });
    if (primaryArr.length === 1) {
        primaryArr.push(noWorkMessage);
    }
    primaryArr.forEach(item => markdownBodyArr.push(item));
    markdownBodyArr.push('\n');
    if (secondaryArr.length === 1) {
        secondaryArr.push(noWorkMessage);
    }
    secondaryArr.forEach(item => markdownBodyArr.push(item));
    markdownBodyArr.push('\n');
    if (unknownArr.length !== 1) {
        unknownArr.forEach(item => markdownBodyArr.push(item));
    }
    return markdownBodyArr.join('');
};
exports.default = makeGroupsIntoMarkdown;
//# sourceMappingURL=makeGroupsIntoMarkdown.js.map