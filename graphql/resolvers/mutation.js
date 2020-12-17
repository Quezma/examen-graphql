import User from '../../models/user'

const Mutation = {
	createUser: async (_, data) => {
		const newUser = new User({...data});
		return await newUser.save();
	},
	updateUser: async (_, data) => {
		await User.findByIdAndUpdate(data.id, {...data});
		return await User.findById(data.id);
	},
	deleteUser: async (_, {id}) => {
		await User.findByIdAndDelete(id);
		return true;
	}
}

export default Mutation;
