module.exports = {
    development: {
        dialect: "sqlite",
        storage: 'database/index.db',
        define: {
            underscored: true,
        },
        migrationStorageTableName: 'sequelize_meta',
    },
    // "test": {
    //     "username": "root",
    //     "password": null,
    //     "database": "database_test",
    //     "host": "127.0.0.1",
    //     "dialect": "mysql"
    // },
    // "production": {
    //     "username": "root",
    //     "password": null,
    //     "database": "database_production",
    //     "host": "127.0.0.1",
    //     "dialect": "mysql"
    // }
}
