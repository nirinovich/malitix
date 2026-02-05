export type PortableTextBlockValue = {
	_type: string;
	[key: string]: unknown;
};

export type PortableTextValue = PortableTextBlockValue[];
