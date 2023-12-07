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