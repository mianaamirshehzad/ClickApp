import AsyncStorage from '@react-native-async-storage/async-storage';

//Saving user's login details locally
export const storeUserLogin = async (email, password) => {
    try {
        await AsyncStorage.setItem('useLogin', JSON.stringify({ email, password }));
    } catch (error) {
        // Error saving data
        console.log("Login details aren't saved");
        console.log(error);
    }
};

//Retrieving user's login details from local storage
export const retrieveUserLogin = async () => {
    try {
      const userLoginData = await AsyncStorage.getItem('useLogin');
      if (userLoginData !== null) {
        // We have data!!
        console.log(value);
        let obj = JSON.parse(userLoginData);
        return obj;
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };