Folder Structure
================

Motivations
-----------

- Module usage predictability (refactoring, maintainemaintenancence, you know
  what's shared-what's not, prevents accidental regressions, reusability,
  avoids huge directories of not-actually-reusable modules, etc)
- Code splitting

How it works
------------

It consist of "generic" folders and a "containers" folder which contains
folders of bigger components that usually consume the "generic".
The "containers" can contain a components folders which encapsulates only components
consumed by the specific container. Last our tests are in _test_ folder with path name of the component they are testing.
`_test_/file.test.js`.

Examples of "generic" folders:

- components (the first)
- api
- types
- store
- reducer
- services (or utils) with api and other functions
- models for your api queries 
 
Our directories like this:

```
src
├── service
├── models
├── components
|
|
├── config   
├── containers
|    ├── 
|    : 
|     // Redux case  
├── store
├── types
└── index.js

```

Next, each of these folders has an `index` file, which is the file
that handles the entry into the folder We'll also have
some top-level application bootstrapping stuff at the root, like ├── └── index.js
`config/index`.
And also a ```style``` file to hold the component's sty

```
src
├── api
|    └── index
├── components
|    └── index 
|      
├── config
|    └── index
├── containers
|    └── Home
|         └──index
|    
├── store
|     └── index
├── types
|    └── index
└── index
```

With this structure, each component has its own directory to hold its
modules. In other words, we've introduced "scope" into our application
file structure.
