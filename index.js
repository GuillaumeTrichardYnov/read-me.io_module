#!/usr/bin/env node

/**
 * import module commander which 
 * contain the option -h by default
 * to list all the command with
 * their arguments
 */
const program = require('commander');
const api = require('./app/services/backendServices');
////------- Extensions commands ------- ////

program
  .command('extensions')
  .alias('e')
  .description('Get available extensions')
  .action(() => {
    api.getExtensions().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });

////---------------------------------- ////

////------- Templates commands ------- ////

program
  .command('templates')
  .alias('t')
  .description('Get available templates')
  .action(() => {
    api.getTemplates().then(templates => {
      templates.forEach(template => console.log(template));
    }).catch(e => console.error('ERROR : ' + e));
  });
////---------------------------------- ////


program.parse(process.argv);
