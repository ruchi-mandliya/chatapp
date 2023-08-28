import React, { useState } from "react";
import Add from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          console.log("Download URL:", downloadURL);
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,

            photoURL: downloadURL,
          });
          // Rest of your code
        });
      });
      // After the upload is complete, before retrieving the download URL
      // uploadTask.on(
      //   (error) => {
      //     console.log("Storage reference:", storageRef);
      //     console.log("File:", file);
      //     console.log("Snapshot ref:", uploadTask.snapshot.ref);
      //     setErr(true);
      //   },
      //   () => {
      //     console.log("Upload complete. Retrieving download URL...");
    } catch (err) {
      console.error("Error retrieving download URL:", err);
      setErr(true);
    }
  };
  //     uploadTask.on(
  //       (error) => {
  //         setErr(true);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           await updateProfile(res.user, {
  //             displayName,
  //             photoURL: downloadURL,
  //           });
  //           await setDoc(doc(db, "users", res.user.uid), {
  //             uid: res.user.uid,
  //             displayName,
  //             email,

  //             photoURL: downloadURL,
  //           });
  //         });
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     setErr(true);
  //   }
  // };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatting App</span>
        <span className="Register">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign-up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
