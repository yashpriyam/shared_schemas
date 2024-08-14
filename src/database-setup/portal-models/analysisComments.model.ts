import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Analysis } from './analysis.model';  // Adjust the import path as needed
import { User } from './user.model';  // Adjust the import path as needed

@Table({
    tableName: 'analysis_comments',
    timestamps: true
})
export class AnalysisComment extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => Analysis)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    analysisId!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    origin?: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    comment?: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    edited?: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
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

    @BelongsTo(() => Analysis)
    analysis!: Analysis;

    @BelongsTo(() => User)
    user!: User;
}
