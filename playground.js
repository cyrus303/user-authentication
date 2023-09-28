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
// hash password: $2a$10$8PZIlc6sTfz4KCV.YaHLauZifx.3gIrqFrOWEoHWdyNuiZxK6pxQm
encryption(password);

const comparePassword = async (userPassword) => {
  const hash =
    '$2a$10$8PZIlc6sTfz4KCV.YaHLauZifx.3gIrqFrOWEoHWdyNuiZxK6pxQm';
  try {
    const salt = await bcrypt.getSalt(hash);
    const inputPasswordHash = await bcrypt.hash(userPassword, salt);
    console.log(hash == inputPasswordHash);
  } catch {
    console.log('somthing went wrong, try agian later');
  }
};

comparePassword(password);
