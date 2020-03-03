module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
          'index.min.js': 'index.js'
        }
      }       
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:release']);
};