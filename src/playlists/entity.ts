// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity} from 'typeorm/repository/BaseEntity'


@Entity()
export default class Playlist extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json', {nullable:false})
  playlistdata: JSON
}