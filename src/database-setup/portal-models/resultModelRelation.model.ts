import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the import path based on your project structure
import { Workspace } from './workspaces.model'; // Adjust the import path based on your project structure

@Table({
    tableName: 'result_model_relation',
    timestamps: true
})
export class ResultModelRelation extends Model {
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

    @ForeignKey(() => Workspace)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    workspaceId!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    result_name!: string;

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

    @BelongsTo(() => Workspace, 'workspaceId')
    workspace!: Workspace; // Define association with Workspace model
}
