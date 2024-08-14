import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the import path based on your project structure

@Table({
    tableName: 'user_aoi',
    timestamps: true
})
export class UserAOI extends Model {
    @Column({
        type: DataType.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    aoi_name!: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true
    })
    area!: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: true
    })
    deleted!: boolean;

    @Column({
        type: DataType.GEOMETRY,
        allowNull: true
    })
    geom!: object;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: true
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: true
    })
    updatedAt!: Date;

    @BelongsTo(() => User, 'userId')
    user!: User; // Define association with User model
}
