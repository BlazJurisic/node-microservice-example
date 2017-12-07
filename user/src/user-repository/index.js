const UserRepository = {
    UserRepository() {
        this.users = new Map();

        this.users.set('darth-plagueis', {
            username: 'darth-plagueis',
            apprentices: [
                'darth-sidious'
            ]
        });
    },
    getUserByUsername(username) {
        return this.users.get(username);
    }
};

const userRepository = Object.create(UserRepository);
userRepository.UserRepository();

module.exports = {
    userRepository,
    UserRepository
};
