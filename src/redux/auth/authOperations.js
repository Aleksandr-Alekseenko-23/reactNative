import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  updateUserProfile,
  authStateChange,
  authSignOut,
  updateAvatarUser,
} from "./authReducer";
import { auth } from "../../firebase/config";
import { updateProfile } from "firebase/auth";
import { uploadPhotoToServer } from "../../firebase/uploadPhoto";

const authRegisterUser =
  ({ userName, email, password, avatar }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userAvatarUrl = await uploadPhotoToServer(avatar);

      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: userAvatarUrl,
      });

      dispatch(
        updateUserProfile({
          userId: user.uid,
          userName,
          email,
          avatar: userAvatarUrl,
        })
      );
    } catch (error) {
      console.log(error);
      console.log(error.massege);
    }
  };

const authLoginUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
      const userUpdateProfile = {
        userId: user.uid,
        userName: user.displayName,
        email,
        avatar: user.photoURL,
      };

      dispatch(updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log(error);
      console.log(error.massege);
    }
  };

const authLogoutUser = () => async (dispatch, getState) => {
  try {
    signOut(auth);
    dispatch(authSignOut());
  } catch (error) {
    console.log(error);
    console.log(error.massege);
  }
};

const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        userName: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      };

      dispatch(updateUserProfile(userUpdateProfile));
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};

const updateUserAvatar =
  ({ avatar }) =>
  async (dispatch, getState) => {
    console.log("avatar", avatar);
    try {
      await updateProfile(auth.currentUser, {
        photoURL: avatar,
      });

      dispatch(updateAvatarUser(avatar));
    } catch (error) {
      console.log(error);
      console.log(error.massege);
    }
  };

export {
  authRegisterUser,
  authLoginUser,
  authLogoutUser,
  authStateChangeUser,
  updateUserAvatar,
};
