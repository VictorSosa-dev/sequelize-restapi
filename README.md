# Nodejs Sequelize RESTAPI PostgreSQL

This is a simple REST API using Javascript Technologies and PostgreSQL.

* nodejs
* express
* postgreSQL
* sequelize
* docker

### Install image postgres and run

1. Open the terminal and type

```
$ docker run -d --rm --name postgres -e POSTGRES_PASSWORD=2940 -p 5432:5432 postgres

$ docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres

```

