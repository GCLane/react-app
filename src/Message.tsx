import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onClick: () => void;
}

// pascalCasing
function Message({ children, onClick }: Props) {
	//JSX: JavaScript XML
	const name = "Grant";
	return (
		<>
			{!name && <h1>Hello World</h1>}
			{name && <h1>Hello {name}</h1>}
			<div>
				<button className="btn btn-primary" onClick={onClick}>
					Click Here
				</button>
				{children}
			</div>
		</>
	);
}

export default Message;
