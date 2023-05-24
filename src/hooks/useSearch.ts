'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import useQueryParams from './useQueryParams';
import { usePathname } from 'next/navigation';

export function useSearch(initialValue: string) {
	const [value, setValue] = useState(initialValue);
	const { setQueryParams } = useQueryParams();

	const pathname = usePathname();

	useEffect(() => {
		setValue(initialValue)
	}, [pathname, initialValue])

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
		setQueryParams({ query: event.target.value })
	}

	const inputProps = {
		value,
		onChange: handleChange
	};

	return inputProps;
}