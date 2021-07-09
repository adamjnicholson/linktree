import React, { PropsWithChildren, useState } from "react";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const DialogContext = React.createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

const useDialog = () => {
	const context = React.useContext(DialogContext);

	if (context === undefined) {
		throw new Error("useDialog must be called withing a DialogProvider");
	}

	return context;
};

const CustomDialog = ({ children }: PropsWithChildren<{}>) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<DialogContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</DialogContext.Provider>
	);
};

export const DialogContent = ({
	children,
	// @todo figure out the proper type
	...props
}: PropsWithChildren<{}>) => {
	const [isOpen, setIsOpen] = useDialog();

	return (
		<Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props}>
			{children}
		</Dialog>
	);
};

export const DialogButton = ({
	children: child,
}: {
	children: React.ReactElement;
}) => {
	const [isOpen, setIsOpen] = useDialog();
	return React.cloneElement(child, {
		onClick: () => setIsOpen(!isOpen),
	});
};

export * from "@reach/dialog";
export { CustomDialog as Dialog };
