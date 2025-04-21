import { FirebaseLoginView, FirebaseLoginViewProps } from "@firecms/firebase";
import logo from "../public/logo.svg"; // Adjust the path if needed

export default function CustomLoginView(props: FirebaseLoginViewProps) {
    return (
        <FirebaseLoginView
            {...props}
            disableSignupScreen={false}
            noUserComponent={
                <div style={{ padding: "1rem", textAlign: "center" }}>
                    No user found. Please log in.
                </div>
            }
        >
            <>
                {/* Custom Logo */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                    <img src={logo} alt="Leo Prime Logo" style={{ height: "64px" }} />
                </div>

                {/* Heading */}
                <h1 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    Leo Prime Website CMS
                </h1>

                {/* Subheading */}
                <p style={{ textAlign: "center", marginBottom: "1rem", fontSize: "1rem", color: "#666" }}>
                    Welcome to Leo Prime Website CMS — the powerful, user-friendly content management system built to simplify your workflow.
                </p>
            </>
        </FirebaseLoginView>
    );
}
