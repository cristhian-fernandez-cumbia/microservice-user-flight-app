import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../user/domain/entities/user.entity';

ConfigModule.forRoot({
	isGlobal: true,
})

export const CONFIG_DATABASE = () =>
	TypeOrmModule.forRoot({
    	type: 'postgres',
		host: process.env.DB_HOST,
		port: +process.env.DB_PORT,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		entities: [User],
		ssl: true,
		synchronize: true,
	});