import { Review } from "../entities/reviews/models/Reviews";
import { User } from "../entities/user/models/User";

export const initModels = () => {


  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  return {
    Review,
    User,
  };
};