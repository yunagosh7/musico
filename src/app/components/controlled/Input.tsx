import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

type Props<T extends FieldValues> = {
	control: Control<T>
}

export default function Input<T extends FieldValues>({
	control
}: Props<T>) {
	return (
		<div>Input</div>
	)
}