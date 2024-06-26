import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserGateway } from './user/user.gateway';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService, UserGateway],
})
export class AppModule {}
