# Git practices

Please read these practices before working on this project.


## Branches

We have 4 different kinds of branches.

### Master

Master branch holds the most stable code, which is also currently deployed on the production server. Master branch is protected and only maintainers have permission to commit and merge pull requests. Develop and occasionally fix branches are merged here.

### Develop

Develop(ment) branch holds the latest version currently being in development. It may not hold the most stable code. It is also protected just like the master branch. Feature and fix branches are merged here.

### Feature

Feature branches are dedicated for development of small new features. They are always merged into `develop` branch.

### Fix

Fix branches are dedicated for resolving reported issues either on `develop` or `master` branches. They are usually merged into `develop` branch, but in case of hotfix, they can be merged directly to `master` (in this case, more precise testing must be done beforehand).

### Release

We do not have release branches as we will only maintain 1 production version. Releases are marked by [tags](#tags).


## Version naming

With front end project of our website, we follow **Romantic Versioning** to express our changes in the code. Versions follow the following pattern:

    [HUMAN].[MAJOR].[MINOR]

where each part means:

- **HUMAN**: Conceptual changes impacting end user (change in technology, major change in design, rewrite)
- **MAJOR**: Set of new features and bugfixes
- **MINOR**: Set of bugfixes and minor changes


## Naming conventions

We believe that sticking to certain naming conventions will help us to easily browse repository, find out who made certain changes and most importantly - why.

### Feature and fix branches

We have our tasks in Hack Kosice's Monday.com board. Each task has its own ID, which is used in branches. The pattern is:

    [TYPE]/[ID]-[DESCRIPTION]

where each part means:

- **TYPE**: `feature` or `fix`, based on task type
- **ID**: ID from Monday.com, as explained above
- **DESCRIPTION**: short, dash-separated explanation of branch's purpose

Examples include:

    feature/1-repository-init
    fix/30-mobile-logo-not-visible

### Pull requests

As in features and fixes, we want PRs to hold information about their type and associated task. Therefore, standard template for naming pull requests is:

    #[ID] - [TITLE]

where each part means:

- **ID**: ID from Monday.com, as explained above
- **TITLE**: Title of task from Monday.com

PR is then marked with either `feature` or `fix` label, according to task type.

Descriptions can stay empty. Fill it only with some useful information - concerns, special steps for testing, requests to review something specific in more depth, etc.

### Tags

After each release, we mark it with a tag. Tag has the following pattern:

    v[VERSION]

So, if we have version `1.3.3`, then tag will look like:

    v1.3.3
