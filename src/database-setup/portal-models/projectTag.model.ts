import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Project } from './project.model'; // Adjust the path based on your project structure

@Table({
    tableName: 'project_tags',
    timestamps: false
})
export class ProjectTag extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => Project)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    projectId!: number;

    @BelongsTo(() => Project, 'projectId')
    project!: Project;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    tag!: string;
}
