import CallbackContent from "@/components/callback-content";
import { Suspense } from "react";

const Callback = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CallbackContent />
		</Suspense>
	);
};

export default Callback;
