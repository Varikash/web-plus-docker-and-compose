import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { OffersModule } from './offers/offers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_HOST, POSTGRES_DB } = process.env;
const POSTGRES_PORT = parseInt(process.env.POSTGRES_PORT, 10);

@Module({
  imports: [
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      entities: ['dist/*/entities/*.entity.js'],
      // schema: 'nest_project',
      synchronize: true,
      //logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
