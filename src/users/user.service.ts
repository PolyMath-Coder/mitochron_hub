import User from './user.model';

const createUser = async (data: object) => {
  try {
    const rawData = JSON.parse(JSON.stringify(data));
    return await User.create(rawData);
  } catch (error) {
    throw new Error('Unable to create user');
  }
};

export default { createUser };
