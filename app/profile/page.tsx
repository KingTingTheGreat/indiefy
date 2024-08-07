import dynamic from "next/dynamic";

const ProfilePage = () => {
	const NoSsrProfile = dynamic(() => import("@/components/profile"), { ssr: false });
	return <NoSsrProfile />;
};

export default ProfilePage;
