import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'users'
})
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    password!: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    phone!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    })
    online?: boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    credits?: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
        defaultValue: false
    })
    enabled?: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    deleted?: boolean;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    updatedAt!: Date;
}
