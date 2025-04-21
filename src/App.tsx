import React, { useCallback, useMemo } from "react";

import {
    AppBar,
    Authenticator,
    CircularProgressCenter,
    Drawer,
    FireCMS,
    ModeControllerProvider,
    NavigationRoutes,
    Scaffold,
    SideDialogs,
    SnackbarProvider,
    useBuildLocalConfigurationPersistence,
    useBuildModeController,
    useBuildNavigationController,
    useValidateAuthenticator
} from "@firecms/core";
import {
    FirebaseAuthController,
    FirebaseLoginView,
    FirebaseSignInProvider,
    FirebaseUserWrapper,
    useFirebaseAuthController,
    useFirebaseStorageSource,
    useFirestoreDelegate,
    useInitialiseFirebase,
} from "@firecms/firebase";
import { CenteredView } from "@firecms/ui";
import logo from "../public/logo.svg"
import { demoCollection } from "./collections/demoAccount";
import { firebaseConfig } from "./firebase_config";
import { ctaCollection } from "./collections/cta";
import { headerCollection } from "./collections/header";
import { footerCollection } from "./collections/footer";
import { aboutCollection } from "./collections/about";
import { accountCollection } from "./collections/account";
import { brokerCollection } from "./collections/broker";
import { contactCollection } from "./collections/contact";
import { depositCollection } from "./collections/depositWithdraw";
import { homeCollection } from "./collections/home";
import { marginCollection } from "./collections/marginRules";
import { platformCollection } from "./collections/platform";
import { policyCollection } from "./collections/policies";
import { toolsCollection } from "./collections/tools";
import { tradingCollection } from "./collections/trading";
import { whyleoprimeCollection } from "./collections/whyLeoPrime";
import CustomFirebaseLogin from "./CustomFirebaseLogin";

function App() {

    // Use your own authentication logic here
    const myAuthenticator: Authenticator<FirebaseUserWrapper> = useCallback(async ({
        user,
        authController
    }) => {

        if (user?.email?.includes("flanders")) {
            // You can throw an error to prevent access
            throw Error("Stupid Flanders!");
        }

        const idTokenResult = await user?.firebaseUser?.getIdTokenResult();
        const userIsAdmin = idTokenResult?.claims.admin || user?.email?.endsWith("@firecms.co");

        console.log("Allowing access to", user);

        // we allow access to every user in this case
        return true;
    }, []);

    const collections = useMemo(() => [
        homeCollection,
        aboutCollection,
        demoCollection,
        accountCollection,
        brokerCollection,
        contactCollection,
        depositCollection,
        marginCollection,
        platformCollection,
        policyCollection,
        toolsCollection,
        tradingCollection,
        whyleoprimeCollection,
        ctaCollection,
        headerCollection,
        footerCollection,
    ], []);

    const {
        firebaseApp,
        firebaseConfigLoading,
        configError
    } = useInitialiseFirebase({
        firebaseConfig
    });

    // Controller used to manage the dark or light color mode
    const modeController = useBuildModeController();

    const signInOptions: FirebaseSignInProvider[] = ["google.com"];

    // Controller for managing authentication
    const authController: FirebaseAuthController = useFirebaseAuthController({
        firebaseApp,
        signInOptions
    });

    // Controller for saving some user preferences locally.
    const userConfigPersistence = useBuildLocalConfigurationPersistence();

    // Delegate used for fetching and saving data in Firestore
    const firestoreDelegate = useFirestoreDelegate({
        firebaseApp
    });

    // Controller used for saving and fetching files in storage
    const storageSource = useFirebaseStorageSource({
        firebaseApp
    });

    const {
        authLoading,
        canAccessMainView,
        notAllowedError
    } = useValidateAuthenticator({
        authController,
        authenticator: myAuthenticator,
        dataSourceDelegate: firestoreDelegate,
        storageSource
    });

    const navigationController = useBuildNavigationController({
        disabled: authLoading,
        collections,
        authController,
        dataSourceDelegate: firestoreDelegate
    });

    if (firebaseConfigLoading || !firebaseApp) {
        return <>
            <CircularProgressCenter />
        </>;
    }

    if (configError) {
        return <CenteredView>{configError}</CenteredView>;
    }

    return (
        <SnackbarProvider>
            <ModeControllerProvider value={modeController}>
                <FireCMS
                    navigationController={navigationController}
                    authController={authController}
                    userConfigPersistence={userConfigPersistence}
                    dataSourceDelegate={firestoreDelegate}
                    storageSource={storageSource}
                >
                    {({
                        context,
                        loading
                    }) => {

                        if (loading || authLoading) {
                            return <CircularProgressCenter size={"large"} />;
                        }

                        if (!canAccessMainView) {
                            return  <CustomFirebaseLogin
                            authController={authController}
                            firebaseApp={firebaseApp}
                            signInOptions={signInOptions}
                            notAllowedError={notAllowedError}
                        />;
                        }

                        return <Scaffold
                            logo={logo}
                            autoOpenDrawer={false}>
                            <AppBar title={"Leo Prime Website CMS"} />
                            <Drawer />
                            <NavigationRoutes />
                            <SideDialogs />
                        </Scaffold>;
                    }}
                </FireCMS>
            </ModeControllerProvider>
        </SnackbarProvider>
    );

}

export default App;
