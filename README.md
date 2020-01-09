# fluffy-octo-doodle

Basic web app using Node.js, Express.js, PostgreSQL, and Bootstrap. A landing page, with auth and a CRUD application collecting sales leads.

## contributing

### First time run & setup

1. Install [docker](https://docs.docker.com/install/)
1. install [docker-compose](https://docs.docker.com/compose/install/)
1. Start the containers [See Basic Usage](###-Basic-usage)
1. Run Migrations [See running migrations](###-running-migrations)

### Running migrations

For DB-releated changes, filenames should be in the format of `YYYMMDDHHMM-VerbNounTable.js`

`$ docker exec myapp_app_1 sequelize db:migrate`

```shell
Loaded configuration file "config/config.js".
Using environment "development".
== 201912261022-CreateLeadTable: migrating =======
== 201912261022-CreateLeadTable: migrated (0.020s)

== 202001020907-CreateUserTable: migrating =======
== 202001020907-CreateUserTable: migrated (0.015s)
```

Subsequent runs (with no changes) should result in:

`$ docker exec myapp_app_1 sequelize db:migrate`

```shell
Sequelize CLI [Node: 13.5.0, CLI: 5.5.1, ORM: 5.21.3]

Loaded configuration file "config/config.js".
Using environment "development".
No migrations were executed, database schema was already up to date.
```

### Basic usage

$ docker-compose build && docker-compose up

## Known Errors

Error: 
```shell
$ docker-compose up
Pulling postgres (postgres:10.4)...
10.4: Pulling from library/postgres
ERROR: no matching manifest for windows/amd64 10.0.18362 in the manifest list entries
```
Solution: (Windows Only) [Switch to linux containers](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers)
