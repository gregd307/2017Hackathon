
exports.up = function(knex, Promise) {
     return knex
            .schema

            .createTable( 'skills', function( skillsTable ) {
                // Primary Key
                skillsTable.increments();

                // Data
                skillsTable.string( 'skillname', 50 ).notNullable();

                skillsTable.timestamp( 'created_at' ).notNullable();

            })

            .createTable( 'users', function( usersTable ) {

                // Primary Key
                usersTable.increments();

                // Data
                usersTable.string( 'name', 50 ).notNullable();
                usersTable.string( 'email', 250 ).notNullable().unique();
                usersTable.string( 'password', 128 ).notNullable();
                usersTable.string( 'racfid', 50 ).notNullable().unique();
                usersTable.money( 'hourlyrate', 50 ).notNullable().unique();

                usersTable.timestamp( 'created_at' ).notNullable();

            } )

            .createTable( 'projects', function( projectsTable ) {

                // Primary Key
                projectsTable.increments();

                // Data
                projectsTable.string( 'projectname', 50 ).notNullable();
                projectsTable.date( 'startdate', 50 ).notNullable().unique();
                projectsTable.date( 'deadline', 250 ).notNullable().unique();
                projectsTable.money( 'totalcost', 128 ).notNullable();
                projectsTable.string( 'epicbucket', 50 ).notNullable().unique();
                projectsTable.boolean( 'iscomplete', 50 ).notNullable().unique();
                projectsTable.boolean( 'isfunded', 50 ).notNullable().unique();

                projectsTable.timestamp( 'created_at' ).notNullable();

            } )

            .createTable( 'projectskills', function( projectskillsTable ) {

                // Primary Key
                projectskillsTable.increments();

                // Data
                projectskillsTable.string( 'project', 50 ).references( 'projectname' ).inTable( 'projects' );
                projectskillsTable.string( 'skill', 50 ).references( 'skillname' ).inTable( 'skills' );               

                projectskillsTable.timestamp( 'created_at' ).notNullable();

            } )

            .createTable( 'userskills', function( userskillsTable ) {

                // Primary Key
                userskillsTable.increments();

                // Data
                userskillsTable.string( 'racfid', 50 ).references( 'racfid' ).inTable( 'users' );
                userskillsTable.string( 'skill', 50 ).references( 'skillname' ).inTable( 'skills' );               

                userskillsTable.timestamp( 'created_at' ).notNullable();

            } )

            .createTable( 'projectusers', function( projectskillsTable ) {

                // Primary Key
                projectusersTable.increments();

                // Data
                projectusersTable.string( 'racfid', 50 ).references( 'racfid' ).inTable( 'users' );
                projectusersTable.string( 'project', 50 ).references( 'projectname' ).inTable( 'projects' );               

                projectusersTable.timestamp( 'created_at' ).notNullable();

            } );

            
};

exports.down = function(knex, Promise) {
      // We use `...ifExists` because we're not sure if the table's there. Honestly, this is just a safety measure. 
    return knex
        .schema
            .dropTableIfExists( 'projectusers' )
            .dropTableIfExists( 'userskills' )
            .dropTableIfExists( 'projectskills' )
            .dropTableIfExists( 'skills' )
            .dropTableIfExists( 'users' )
            .dropTableIfExists( 'projects' );
  
};
