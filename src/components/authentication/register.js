import { Button, Card, CardContent, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/userContext";
import cssClasses from "../cssClasses";

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: '5rem'
    }
}))

const Register = () => {

    const userService = useContext(UserContext);
    const [avatar, setAvatar] = React.useState("");
    const [imgpath, setImgPath] = React.useState("");

    const globalStyles = cssClasses();
    const styles = useStyles();


    const registerForm = {
        fullname: '',
        email: '',
        password: '',
        age: '',
        created: new Date(),
        isadmin: false
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;

        userService.addUser(value)

            .then(res => console.log(res));
    }


    const showAvatar = () => {
        if (imgpath) {
            return (
                <img src={imgpath} className="img-fluid" />
            )
        }
    }

    const uploadImage = (event) => {
        const data = new FormData();
        data.append('image', event.target.files[0]);
        setAvatar(event.target.files[0].name);
        userService.uploadImage(data)
            .then(res => console.log(res));

        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            // erroMsg = 'Only images are supported.';
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setImgPath(reader.result);
        };
    }


    return (
        <div className="col-md-6 mx-auto">
            <Card className={clsx(globalStyles.card, styles.card)}>
                <CardContent>
                    <Formik
                        initialValues={registerForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Register Here</h3>

                                <div className="row">
                                    <div className="col-md mt-5">
                                        <label className="mt-5">Full Name</label>
                                        <input type="text" className="form-control" id="firstname" onChange={handleChange} value={values.firstname} />
                                    </div>

                                </div>

                                <label className="mt-4">Age</label>
                                <input type="number" className="form-control" id="age" onChange={handleChange} value={values.age} />

                                <label className="mt-4">Email</label>
                                <input type="email" className="form-control" id="email" onChange={handleChange} value={values.email} />

                                <label className="mt-4">Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />

                                {showAvatar()}
                                <input className="form-control mt-5" type="file" onChange={uploadImage} />

                                <div className="text-center">
                                    <Button variant="contained" color="primary" className="mt-5 w-100">Submit</Button>

                                </div>

                                <p className="mt-3 text-center">Already Registered? <Link to="/app/login">Login Here</Link></p>

                            </form>
                        )}
                    </Formik>

                </CardContent>

            </Card>
        </div>
    )

}

export default Register;