import { PartialType } from '@nestjs/mapped-types';
import { CreateWechatEchoerDto } from './create-wechat-echoer.dto';

export class UpdateWechatEchoerDto extends PartialType(CreateWechatEchoerDto) {}
