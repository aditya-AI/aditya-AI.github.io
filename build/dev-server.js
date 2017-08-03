require('shelljs/global');
require('colors');

exec('npm install', function(code, stdout, stderr) {
    if (code == 0) {
        console.log("Packages are already installed.\n".green)
    } else {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    }
});

exec('jekyll server --watch', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
});
