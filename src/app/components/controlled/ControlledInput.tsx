import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

interface Props<T extends FieldValues, V extends FieldPath<T> = FieldPath<T>> extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	control: Control<T>;
	rules?: Omit<RegisterOptions<T, V>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
	name: FieldPath<T>;
}

export default function ControlledInput<T extends FieldValues, V extends FieldPath<T> = FieldPath<T>>({
	control,
	rules,
	name,
	className = "",
	...props
}: Props<T, V>) {
	return (
		<Controller
			control={control}
			rules={rules}
			name={name}
			render={({ field, fieldState: { error } }) =>
			(
				<input
					{...props}
					{...field}
					className={`${className} ${error?.message ? "outline-red-500 border-red-500 outline-2" : ""}`}
				/>
			)}
		/>
	)
}