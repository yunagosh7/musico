import React from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

type Props<T extends FieldValues, V extends FieldPath<T> = FieldPath<T>> = {
	control: Control<T>;
	rules?: Omit<RegisterOptions<T , V>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
	name: FieldPath<T>
	className?: string;
}

export default function ControlledInput<T extends FieldValues, V extends FieldPath<T> = FieldPath<T>>({
	control,
	rules,
	name,
	className=""
}: Props<T, V>) {
	return (
		<Controller 
			control={control}
			rules={rules}
			name={name}
			render={({}) => (
				<input
					className={`${className}`}
				/>
			)}
		/>
	)
}