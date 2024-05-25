import { Suspense } from "react";
import ProfileContent from "@/components/profile-content";

const Profile = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProfileContent />
		</Suspense>
	);
};

export default Profile;
