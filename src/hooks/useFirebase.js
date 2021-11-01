import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from
    "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    ///////// GOOGLE SIGN IN POPUP //////////
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                ////////// SET ERROR //////////
            }).catch(error => {
                setError(error.message)
            })
    }
    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    const newRegistration = (email, password, name) => {
        setName(name);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    return {
        signInUsingGoogle, user, error, logOut, newRegistration, handleLogin, name, isLoading
    }
}
export default useFirebase;
