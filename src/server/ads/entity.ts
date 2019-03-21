import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, Length, MinLength, IsUrl, IsEmail } from 'class-validator'



@Entity()
export default class Advertisment extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(5, 25)
  @Column('text')
  title: string;

  @IsString()
  @MinLength(10)
  @Column('text')
  description: string;

  @IsUrl()
  @MinLength(10)
  @Column('text')
  picture: string;


  @Column('text')
  price:string;

  @IsEmail()
  @Column('text')
  email: string;


  @Column('text')
  phone_number: string;

}