import React from "react";
import "./styles.scss";
import { Button } from "./Button";

export function App() {
	const handleClick = (a, b) => {
		console.log("Button clicked!");
	};

	return (
		<div className="container">
			<h1>Hello ESLint 9 + Prettier!</h1>
			<Button label="Click me" onClick={handleClick} />
		</div>
	);
}
