module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ['public']
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'public/css',
                    noLineComments: true
                }
            },
            prod: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        },
        concurrent: {
            target1: ['jshint', 'compass:dev']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: ''
                    //keepalive: true
                }
            }
        },
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['**/*.js'],
                    dest: 'public/js/'
                }, {
                    expand: true,
                    cwd: 'src/components/',
                    src: [
                        'jquery/jquery.js'
                    ],
                    dest: 'public/js/vendor/'
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        'index.html'
                    ],
                    dest: './'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: 'src/components/',
                    src: [
                        'jquery/jquery.min.js'
                    ],
                    dest: 'public/js/vendor/'
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        'index.html'
                    ],
                    dest: './'
                }]
            }
        },
        // http://www.jshint.com/docs/#options
        jshint: {
            files: {
                src: [
                    'Gruntfile.js',
                    'src/**/*.js',
                    'tests/**/*.js',
                    '!src/components/**/*.js'
                ]
            },
            options: {
                boss: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                es5: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                node: true,
                noempty: true,
                plusplus: true,
                quotmark: 'single',
                smarttabs: false,
                strict: true,
                sub: true,
                trailing: true,
                undef: true,
                unused: true,

                globals: {
                    document: true
                }
            }
        },
        mocha: {
            all: {
                options: {
                    urls: ['http://localhost:9001/tests/js/'],
                    run: true
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.author.name %> ' +
                        '(<%= pkg.version %>) | ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %>  */\n',
                mangle: true,
                wrap: true
            },
            dist: {
                files: {
                    'public/js/js-<%= pkg.version %>.min.js': [
                        'src/js/Person.js',
                        'src/js/main.js'
                    ]
                }
            }
        },
        usemin: {
            html: ['index.html']
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                uglify: 'null',
                dest: '/'
            }
        },
        watch: {
            src: {
                files: [
                    'src/**/*.js',
                    'src/**/*.scss',
                    '!src/components/**/*.js'
                ],
                tasks: [
                    'jshint',
                    'copy:dev',
                    'compass:dev'
                ]
            },
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['compass:dev']
            },
            test: {
                files: ['tests/js/**/*.js'],
                tasks: ['test']
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('build:dev', [
        'connect',
        'mocha',
        'clean:build',
        'concurrent',
        'copy:dev'
    ]);
    grunt.registerTask('build:prod', [
        'jshint',
        'connect',
        'mocha',
        'clean:build',
        'copy:prod',
        'compass:prod',
        'useminPrepare',
        'usemin',
        'uglify'
    ]);

    grunt.registerTask('test', ['connect', 'mocha']);
    grunt.registerTask('build', ['build:dev']);
};