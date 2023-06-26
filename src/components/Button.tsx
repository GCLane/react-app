import React from "react";

interface Props {
	children: string;
	color?: "warning" | "primary" | "secondary" | "danger";
	onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
	return (
		<button type="button" className={"btn btn-" + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
