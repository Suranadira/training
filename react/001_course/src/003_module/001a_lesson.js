import React, { Children } from "react";

export default props => <>{Children.map(props.children, child => child)}</>;
