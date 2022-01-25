const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const customTranslateX = plugin(function ({ addUtilities }) {
    addUtilities({
        ".translate-x-30perc": {
            transform: "translateX(30%)",
        },
        ".translate-y-22": {
            transform: "translateY(5.5rem)",
        },
        ".translate-both-butt-sm": {
            transform: "translate(-60px, 150px)",
        },
        ".translate-both-butt-md": {
            transform: "translate(-100px, 150px)",
        },
        ".-translate-x-13": {
            transform: "translateX(-4rem)",
        },
        ".-translate-x-14": {
            transform: "translateX(-6rem)",
        },
        ".-translate-x-350px": {
            transform: "translateX(-350px)",
        },
        ".translate-y-18": {
            transform: "translatey(4.5rem)",
        },
    });
});

module.exports = {
    mode: "jit",
    purge: ["./src/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "0.5rem",
        },
        fontFamily: {
            "app-bold": "AppDisBold",
            "app-black": "AppDisBlack",
            "app-reg": "AppDisRegular",
            "app-light": "AppDisLight",
            "app-thin": "AppDisThin",
            "gil-bold": "GilroyBold",
            "gil-reg": "GilroyRegular",
            "gil-light": "GilroyLight",
            "gil-medium": "GilroyMedium",
        },
        letterSpacing: {
            tightest: "-2px",
            tighter: "-1px",
            tight: "-0.5px",
            normal: "0px",
            wide: "0.5px",
            wider: "1px",
            widest: "2px",
            large: "6px",
            larger: "9px",
            largest: "12px",
        },
        screens: {
            xs: "425px",
            ...defaultTheme.screens,
        },
        maxWidth: {
            "305px": "305px",
            "330px": "330px",
            "370px": "370px",
            "400px": "400px",
            "430px": "430px",
            "500px": "500px",
            "600px": "600px",
            "715px": "715px",
            "800px": "800px",
            "915px": "925px",
            "950px": "950px",
            "1050px": "1100px",
            "1300px": "1300px",
            initial: "initial",
        },
        extend: {
            rotate: {
                270: "270deg",
            },
            padding: {
                "320px": "320px",
                "430px": "430px",
            },
            backgroundColor: {
                "main-light": "#f7e7ce",
                "main-100": "#e8dcc3",
                "main-200": "#e2d2b7",
                "main-250": "#E2D1B5",
                "main-300": "#be6c42",
                "main-dark": "#713c25",
                "main-green": "#8a7442",
                "header-bg": "#E5D8BE",
            },
            textColor: {
                "main-light": "#f7e7ce",
                "main-100": "#e8dcc3",
                "main-200": "#e2d2b7",
                "main-300": "#be6c42",
                "main-dark": "#713c25",
                "main-green": "#8a7442",
            },
            borderColor: {
                "b-main": "#be6c42",
                "main-light": "#f7e7ce",
                "main-100": "#e8dcc3",
                "main-200": "#e2d2b7",
                "main-300": "#be6c42",
                "main-dark": "#713c25",
                "main-green": "#8a7442",
            },
            borderWidth: {
                1: "1px",
            },
            screens: {
                mxl: "1760px",
            },
            borderRadius: {
                "30r": "30px",
            },
            transformOrigin: {
                "center-bottom": "center bottom",
            },
            fontSize: {
                xs: "0.6rem",
                md: "0.85rem",
                "3rem": "3rem",
                "3.5rem": "3.5rem",
                "4rem": "4rem",
                "4.5rem": "4.5rem",
                "5rem": "5rem",
                "6rem": "6rem",
                "6.5rem": "6.5rem",
                "7rem": "7rem",
                "7.5rem": "7.5rem",
                "8rem": "8rem",
                "8.5rem": "8.5rem",
                "9rem": "9rem",
                "9-2rem": "9.2rem",
                "10rem": "10rem",
                "11rem": "11rem",
                "12rem": "12rem",
                "13rem": "13rem",
                "14rem": "14rem",
                "15rem": "15rem",
                "16rem": "16rem",
                "17rem": "17rem",
                "18rem": "18rem",
                "19rem": "19rem",
                "20rem": "20rem",
                "21rem": "21rem",
                "22rem": "22rem",
                
                "23rem": "23rem",
                "24rem": "24rem",
                "25rem": "25rem",
                "26rem": "26rem",
                "27rem": "27rem",
                "28rem": "28rem",
                "29rem": "29rem",
                "37rem": "37rem",
                "45rem": "45rem",
                brand: "28px",
                "40px": "40px",
                "17px": "17px",
                "24px": "24px",
                "11.5rem": "11.5rem",
                "5.5rem": "5.2rem",
                "24.75rem": "24.75rem",
            },
            lineHeight: {
                "2.5rem": "2.5rem",
                "3rem": "3rem",
                "3.5rem": "3.5rem",
                "4rem": "4rem",
                "4.5rem": "4.5rem",
                "5rem": "5rem",
                "5.5rem": "5.5rem",
                "6rem": "6rem",
                "6.5rem": "6.5rem",
                "7rem": "7rem",
                "8rem": "8rem",
                "9rem": "9rem",
                "9.5rem": "9.5rem",
                "10rem": "10rem",
                "11rem": "11rem",
                "12rem": "12rem",
                "13rem": "13rem",
                "14rem": "14rem",
                "15rem": "15rem",
                "16rem": "16rem",
                "17rem": "17rem",
                "18rem": "18rem",
                "19rem": "19rem",
                "20rem": "20rem",
                "21rem": "21rem",
                "22rem": "22rem",
                "23rem": "23rem",
                "24rem": "24rem",
                "25rem": "25rem",
                "26rem": "26rem",
                "27rem": "27rem",
                "28rem": "28rem",
                "29rem": "29rem",
                "30rem": "30rem",
                "37rem": "37rem",
                "10per": "160%",
            },
            gridTemplateRows: {
                "main-rows": "minmax(0, 1fr) 0.6fr 0.5fr",
                "xs-main-rows": "repeat(2, minmax(0, 1fr)) 0.5fr",
                "sm-main-rows": "200px 320px",
                "md-main-rows": "250px 325px",
                "lg-main-rows": "275px 350px",
                "xl-main-rows": "400px 300px",
                "2xl-main-rows": "325px 600px",
                "mxl-main-rows": "380px 600px",
                "product-rows": "5fr 90px 45px",
                "product-rows-xl": "5fr 110px 55px",
                "product-rows-2xl": "5fr 125px 60px",
                "product-rows-mxl": "5fr 140px 60px",
            },
            marginTop: {
                13: "3.25rem",
            },
            width: {
                40: "40%",
                85: "85%",
                130: "130%",
                120: "120%",
                "25rem": "25rem",
                "28rem": "28rem",
                "38rem": "38rem",
                "49rem": "49rem",
                "240px": "240px",
                "490px": "490px",
                "535px": "535px",
                "570px": "570px",
                "690px": "690px",
                "755px": "755px",
                "860px": "860px",
                "960px": "960px",
                "1035px": "1035px",
                "1115px": "1115px",
                "1325px": "1325px",
                "1600px": "1600px"
            },
            letterSpacing: {
                "2xl": "15px",
            },
            keyframes: {
                infiniteRotate: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                circleRotate: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                // zoomInOut: {
                //     "0%": {
                //         transform: "scale(0.85)",
                //     },
                //     "100%": {
                //         transform: "scale(1)",
                //     },
                // },
            },
            animation: {
                infiniteRotate: "infiniteRotate 18s linear infinite",
                circleRotate: "circleRotate 20s linear infinite",
                zoomInOut: "zoomInOut 30s linear 1",
            },
            animationFillMode: {
                forward: "forwards",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-animation"), customTranslateX],
};
