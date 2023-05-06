/*

    Types of packages or installs

    The two types of packages that we can install are simple dependencies or development dependencies.

    Simple, or regular dependencies, are simply packages that contain some code that we will include in our own code.
    So code upon which we built our own application, and that's why we actually call them dependencies, because our
    project and our code depend on them to work correctly.

    Development dependencies are not needed for production we just use them for developing our application. To specify
    the developmental dependency we use the command -> example 1
    It then adds the entry to the package.json file.

    Two types of installs are local and global. Local installs are available only in that project but global installs
    are available on all the projects. To install globally we use the command -> example 2

    example 1
    npm install nodemon --save-dev

    example 2
    npm install nodemon --global

 */