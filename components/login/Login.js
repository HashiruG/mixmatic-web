import { useState } from "react";

const LoginItem = (props) => {
    const [formData, setformData] = useState({ email: "", password: "" });

    function handleChange(name, value) {
        setformData((prevvalue) => ({
            ...prevvalue,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.email !== "" && formData.password !== "") {
            props.onFormSubmit(formData);
        }
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#343a40' }}>
            <section className="gradient-form" style={{ padding: '20px' }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-10">
                            <div className="card rounded-3 border border-3 text-black bg-light">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <h2 className="fw-bold mb-2 text-uppercase">Welcome to Mixmatic Pro</h2>
                                                <h4 className="mt-1 mb-5 pb-1">Sign in to your account</h4>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example11">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="form2Example11"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="form2Example22"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                    />
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        className="btn btn-dark btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="submit"
                                                    >
                                                        Sign in
                                                    </button>
                                                    <p style={{ color: "red" }}>{props.message}</p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center justify-content-center gradient-custom-2"  style={{ backgroundColor: 'white' }}>
                                        <div className="text-center">
                                            <img
                                                src="/image.jpeg"
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                                alt="Right Side Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginItem;
