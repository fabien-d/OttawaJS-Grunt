/*global Person*/
'use strict';

var jd = new Person();
var me = new Person( 'Fabien', 'Doiron' );

console.log( jd.intro() );
console.log( me.intro() );