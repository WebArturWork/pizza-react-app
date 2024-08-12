import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="128" r="109" />
        <rect x="21" y="258" rx="10" ry="10" width="221" height="20" />
        <rect x="23" y="305" rx="10" ry="10" width="218" height="72" />
        <rect x="22" y="419" rx="10" ry="10" width="78" height="18" />
        <rect x="121" y="408" rx="15" ry="15" width="120" height="33" />
    </ContentLoader>
)

export default PizzaSkeleton;