import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../sequelize';
import { User } from '../../user/models/User';

export interface ReviewData {
  id: number;
  user_id: number;
  product_name: string;
  review: string;
  rate: number;
  photo: string;
}

export const Review = sequelize.define<Model<ReviewData>>('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  review: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

// Связь: один пользователь может иметь много отзывов
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });