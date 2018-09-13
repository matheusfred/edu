module.exports = function(grunt){
  grunt.initConfig({

	//WEB SERVICE'S CONFIG
    browserSync: {
      dev: {
          bsFiles: {
              src : ['public/css/script.css','public/index.html']
          },
          options: {
            server: './public'
          }
      }
    }
  });

  //LOAD PLUGINS GRUNT
  grunt.loadNpmTasks('grunt-browser-sync');

  //TASK FOR DEV AND TESTE
  grunt.registerTask('dev', [ 'browserSync']);
};
