const bcrypt = require('bcryptjs');

const encryption = async (password) => {
  try {
    const salt = await bcrypt.genSalt();
    const encryptedPassword = await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

const password = 'Fresh-Curler-Rumble5';
encryption(password);
