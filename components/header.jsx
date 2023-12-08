import { HeaderBackBtn } from "./icons";

export const Options = (props) => {
    return props.headerShow ? {
        headerLeft: () => {
            return (
                <HeaderBackBtn />
            );
        },
        headerRight: () => {
            return
        },
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {
            backgroundColor: "#000"
        }
    } : {
        headerLeft: () => {
            return (
                <HeaderBackBtn />
            );
        },
        headerRight: () => {
            return
        },
        headerTitle: "",
        headerShadowVisible: false,
        header: () => { }
    }
}