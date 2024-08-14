import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the path based on your project structure

@Table({
    tableName: 'projects',
    timestamps: true
})
export class Project extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

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

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    projectUserId!: number;

    @BelongsTo(() => User, 'projectUserId')
    user!: User;

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
