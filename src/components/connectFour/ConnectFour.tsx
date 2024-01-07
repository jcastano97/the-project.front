import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { CustomButton } from "@components/common/material-ui/CustomButton";
import { CustomInput } from "@components/common/material-ui/CustomInput";

export function ConnectFour() {
	const ref = useRef(null);

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const {
		control,
		formState: { isDirty, isValid },
	} = useForm<{
		connectNumber: number;
	}>({
		mode: "onChange",
		defaultValues: {
			connectNumber: 4,
		},
	});

	useLayoutEffect(() => {
		if (ref.current) {
			const { offsetWidth, offsetHeight } = ref.current;
			setWidth(offsetWidth);
			setHeight(offsetHeight);
			console.log(offsetWidth, offsetHeight);
		}
	}, []);

	const startConnection = () => {
	}

	const startRoom = () => {
	}

	useEffect(() => {
		startConnection();
	}, []);

	return (
		<div ref={ref} className="w-full h-full flex px-2 items-center flex-wrap">
			<div>
				<div className="flex w-full">
					<div className="flex-none">
						<h1>
							Set connect:
						</h1>
					</div>
					<div className="flex-1 ml-2">
						<Controller
							control={control}
							name="connectNumber"
							rules={{ required: true }}
							render={({ field: { ref, ...field }, fieldState: { error } }) => (
								<>
									<CustomInput {...field} inputRef={ref} hookError={error} placeholder="Number" type="number" />
								</>
							)}
						/>
					</div>
				</div>
				<div className="w-full flex mt-4">
					<div className="mx-auto">
						<CustomButton onClick={startRoom} disabled={(!isDirty || !isValid)}>
							Start
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
}
