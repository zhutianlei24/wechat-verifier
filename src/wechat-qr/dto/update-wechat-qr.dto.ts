import { PartialType } from '@nestjs/mapped-types';
import { CreateWechatQrDto } from './create-wechat-qr.dto';

export class UpdateWechatQrDto extends PartialType(CreateWechatQrDto) {}
