import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../../Firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setuser] = useState({})
    const [error, seterror] = useState('')
    const [token, setoken] = useState('')
    const [admin, setAdmin] = useState(false);
    const [tutor, setTutor] = useState(false);
    const [employer, setEmployer] = useState(false);
    const [active, setActive] = useState(false);

    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();

   

    const provider = new GoogleAuthProvider();
    // create user
    const createUser = async (name, email, password, history) => {
        setisLoading(true)
        console.log(name, email, password, history)

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
                seterror('');
                const newUser = { email, displayName: name };
                setuser(newUser);
                saveUser(email, name, 'POST');
                setName(name)
                history('/learn');
             
                verifyEmail()
            })
            .catch((error) => {
                seterror(error.message);
                console.log(error.message)
                // ..
            }).finally(() => {
                setisLoading(false)
            });
    };
    // verify email
const verifyEmail=()=>{
    sendEmailVerification(auth.currentUser)
  .then(() =>console.log('email sent'))    // Email verification sent!

}
// reset pass funciton
const resetPass=(email)=>{
    sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('sentt')
    // Password reset email sent!
    // ..
  })

}

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
                activeStatus(user.email)
            }).catch((error) => {
                seterror(error.message);
            }).finally(() => {
                setisLoading(false)
                console.log('first')
            });
    }

    // email pass sign in
    const emailPass = async (email, password, location, history) => {
        setisLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                seterror('')
                setuser(userCredential.user);
                saveUser(email, userCredential.user.displayName, 'POST');
                const destination = location?.state?.from || '/learn';
                history(destination);
                // ...
                activeStatus(email)
            })
            .catch((error) => {
                seterror(error.message);
            }).finally(() => {
                setisLoading(false)
            });
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
        fetch(`https://fierce-woodland-01411.herokuapp.com/api/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin)
                setTutor(data.tutor)
                setEmployer(data.employer)
                setisLoading(false)

            })

    }, [user.email])

    // signoUT
    const logOut = () => {
        setisLoading(true)
        console.log('logging')
        activeStatus(user.email, false)
        signOut(auth).then(() => {
            setuser({})
            setisLoading(false)
        }).catch((error) => {
            // An error happened.
        });
    }
    // git remote add origin https://github.com/univebd/univedb.git
    const saveUser = (email, displayName, method) => {
        setisLoading(true)
        const userData = { email, displayName };
        fetch('https://fierce-woodland-01411.herokuapp.com/api/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
        setisLoading(false)

    }
    // active
    const activeStatus = (email, status = true) => {
        setisLoading(true)
        console.log('in')
        const userData = { email, status };

        fetch('https://fierce-woodland-01411.herokuapp.com/api/active', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(console.log('res'))
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
        tutor,
        employer,
        resetPass,

    }

}
export default useFirebase;