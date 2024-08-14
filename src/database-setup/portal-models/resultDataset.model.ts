import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ResultModelRelation } from './resultModelRelation.model'; // Adjust the import path based on your project structure

@Table({
    tableName: 'result_dataset',
    timestamps: true
})
export class ResultDataset extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => ResultModelRelation)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    resultId!: number;

    @Column({
        type: DataType.JSONB,
        allowNull: true
    })
    attribute!: object;

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

    @BelongsTo(() => ResultModelRelation, 'resultId')
    resultModelRelation!: ResultModelRelation; // Define association with ResultModelRelation model
}
