import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, getIdToken, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../../Firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState('')
    const [token, setoken] = useState('')
    const [admin, setAdmin] = useState(false);
    const [tutor, setTutor] = useState(false);

    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    // create user
    const createUser = (name, email, password, history) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('');
                const newUser = { email, displayName: name };
                setuser(newUser);
                saveUser(email, name, 'POST');
                setName(name)
                history('/learn');
                // ...
            })
            .catch((error) => {
                seterror(error.message);
                // ..
            }).finally(() => {
                setisLoading(false)
            });
    };

    // updateProfile
    const setName = (name) => {
        setisLoading(true)

        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    // google sign
    const signGoogle = (location, history) => {
        setisLoading(true)

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                seterror('');
                const destination = location?.state?.from || '/learn';
                history(destination);
            }).catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }

    // email pass sign in
    const emailPass = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('')
                setuser(userCredential.user);
                saveUser(email, userCredential.user.displayName, 'POST');
                const destination = location?.state?.from || '/learn';
                history(destination);
                // ...
            })
            .catch((error) => {
                seterror(error.message);
            }).finally(() => setisLoading(false));
    }
    // authchange
    useEffect(() => {
        setisLoading(true)

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                getIdToken(user).then(idToken => { setoken(idToken) })
                // ...
            } else {
                // User is signed out
                // ...
                setuser({})
            }
            setisLoading(false)

        });
    }, [auth])


    useEffect(() => {
        setisLoading(true)
        console.log('start');
        // fierce-woodland-01411.herokuapp.com
        fetch(`http://localhost:7000/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin)
                setTutor(data.tutor)
                setisLoading(false)

            })

    }, [user.email])

    // signoUT
    const logOut = () => {
        setisLoading(true)

        signOut(auth).then(() => {
            setuser({})
            setisLoading(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    const saveUser = (email, displayName, method) => {
        setisLoading(true)
        const userData = { email, displayName };
        fetch('http://localhost:7000/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
        setisLoading(false)

    }
    // const saveUser = (email, displayName, method, route) => {
    //     let Email = email
    //     let Username = displayName

    //     const userData = { Email, Username };
    //     fetch(`http://localhost:3000/api/${route}`, {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(userData)
    //     })
    //         .then(res => res.json()).then(data => console.log(data))
    // }
    return {
        user,
        isLoading,
        setisLoading,
        createUser,
        emailPass,
        error,
        logOut,
        signGoogle,
        seterror,
        admin,
        token,
        tutor

    }

}
export default useFirebase;