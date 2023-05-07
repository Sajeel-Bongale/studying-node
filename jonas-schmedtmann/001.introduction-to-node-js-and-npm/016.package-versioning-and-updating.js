/*

    Package versioning and updating

    Most of the packages on npm follow the so-called semantic version notation, which means that their versions numbers
    is always expressed with these three numbers. -> "^1.18.11"

    The first one here is called the major version. The major version, which is only bumped up whenever it is
    a huge new release which can have breaking changes. When there is a new version there are chances that it might
    break our existing code.

    The second one is called the minor version. The minor version introduces some new features into the package,
    but it does not include breaking changes. If one day the nodemon team, for example, decides to release version 1.19,
    well, that will then include some new features but it will not break our code.

    The third one is called the patch version. The patch version, which is just this last one here, is only intended to
    fix bugs.

    ^ This means that we accept minor version and bug fixes.
    ~ This accepts only patch releases.
    * Accepts the major version

    To check if we have any outdated packages we use the command -> example 1

    We can install a particular package with the version number specified by us -> example 2

    To delete a npm package we use the following command -> example 3
    We should always uninstall not used libraries or packages.

    We should not share or push the node modules folder. package-lock.json file

    example 1
    npm outdated

    example 2
    npm install slugify 1.0.0

    example 3
    npm uninstall slugify


 */