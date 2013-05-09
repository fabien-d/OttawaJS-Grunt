'use strict';

var Person = function ( fname, lname ) {
    this.fname = fname || 'John';
    this.lname = lname || 'Doe';
};

Person.prototype.fullname = function () {
    return this.fname + ' ' + this.lname;
};

Person.prototype.intro = function () {
    return 'Hi! My name is ' + this.fullname();
};