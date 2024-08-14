import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './index'; 

@Table({
    tableName: 'user_models',
    timestamps: true
})
export class UserModel extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    name!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    description?: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    deleted?: boolean;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    status?: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    stepNumber?: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    progressPercentage?: number; 

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    createdAt!: Date;

    @Column({
        type: DataType.STRING(255),
        allowNull: true,
    })
    weightPath?: string;

    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    parameters?: JSON;

    @Column({
        type: DataType.JSON,
        allowNull: true,
    })
    hyperParameters?: JSON;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    updatedAt!: Date;

    @BelongsTo(() => User, 'userId')
    user!: User; // Define association with User model
}
