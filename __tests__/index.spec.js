'use strict';

import * as fs from 'fs'; //import functions for working with file system
const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content

document.documentElement.innerHTML = htmlContent;
/* Your tests go here */

test('alert displays when button pressed', function () {
    let alert = document.querySelector('.alert');
    let button = document.querySelector('button');
    expect(alert.display).toEqual('none');
})