/*

    How requiring module really helps

    In the NODE.JS module system each JavaScript file is treated as a separate module. NodeJS uses the CommonJS module
    system: require(), exports or module.exports.

    require function is not a regular javascript function as it gets access to the import modules. It takes the file
    path as an argument. Behind the scenes the following steps are executed behind the scenes.
        1. The path to the required module is resolved and the file is loaded.
        This process is called as resolving the file path as there are three different kinds of modules which the node
        needs to resolve in order to execute one. The Node's core modules, projects own modules and the  third party
        modules from npm like express.

        When the require functions receives the module name as its input, it will first try to load a core module with
        that name. For example, the http module. It will automatically find a path to that module and then load it.
        Now if the path starts with a dot, or two dots, it means that it's a developer module because we indicate the
        relative path to our file. So node will try to load that file, but if there is no file with that name, then it
        will look for a folder instead and load index.js if it's in that folder. Finally, if the required module
        is neither a core module, nor a developer module, node will assume it's a module from npm. On a module that we
        load from npm, we actually don't need to write the path when we require it, just the module name, just the way
        it works on a core module. If the file can't be found anywhere, then an error is thrown and the execution
        of the app is stopped.

        2. A process called wrapping happens
        After the module is loaded, the module's code is wrapped into a special function which will give us access to a
        couple of special objects. The Node here takes the code out of the module and wraps it around an IIFE. It is the
        wrapper function that will execute our code and attach functions like require, exports, --filename, etc. So, we
        automatically have access to them, these are basically like global variables that are injected into each and
        every module. Wrapping the code in a special helps us to avoid variable leaks and access to the global variables
        from anywhere.

        3. Module code is executed
        All the code wrapped inside the wrapper function is executed.

        4. The module exports are returned
        Require function returns exports of the required module. The variables exported from one module are returned
        from another the require function in another module. If we want to export one single variable or function then
        we use module.exports. If we want to export multiple properties then we use exports.name

        5. The entire module gets cached
        The modules are cached after the first time they are loaded. This means is that if you require the same module
        multiple times, you will always get the same result and the code in the modules is actually only executed
        in the first call. In subsequent calls, the result is simply retrieved from cache.

 */