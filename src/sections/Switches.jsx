import KeyboardSwitch from "../components/KeyboardSwitch";
import { MoveDown, MoveLeft, MoveRight, MoveUp, Space } from "lucide-react";

const Switches = () => {
	return (
		<div className="flex gap-x-8 items-end justify-center">
			<div className="flex flex-col justify-center gap-y-4">
				<div>
					<KeyboardSwitch label={<MoveUp className="h-5" />} />
				</div>
				<div className="space-x-4">
					<KeyboardSwitch label={<MoveLeft className="h-5" />} />
					<KeyboardSwitch label={<MoveDown className="h-5" />} />
					<KeyboardSwitch label={<MoveRight className="h-5" />} />
				</div>
			</div>
			<div>
				<KeyboardSwitch
					label={<Space className="h-5" />}
					style={{ width: "400px" }}
				/>
			</div>
		</div>
	);
};
export default Switches;
