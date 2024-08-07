const ScoreDisplay = ({ score }: { score: number | undefined }) =>
	score ? (
		<div className="flex flex-row justify-start items center w-[40%] bg-nullGray m-4">
			<div className="bg-customGreen h-[90%" style={{ width: `${score}%` }}>
				<p>{score}%</p>
			</div>
		</div>
	) : (
		<></>
	);

export default ScoreDisplay;
