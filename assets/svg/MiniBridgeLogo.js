import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function MiniBridgeLogo(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={30}
            height={30}
            viewBox="0 0 201 201"
            fill="none"
            {...props}
        >
            <Path
                fill="url(#pattern0)"
                d="M0.153809 0.722656H200.153809V200.722656H0.153809z"
            />
            <Defs>
                <Pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <Use xlinkHref="#image0_1350_37777" transform="scale(.0048)" />
                </Pattern>
                <Image
                    id="image0_1350_37777"
                    width={208}
                    height={208}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    )
}

export default MiniBridgeLogo
