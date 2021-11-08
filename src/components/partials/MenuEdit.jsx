import React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
	{ icon: <SpeedDialIcon />, name: 'Ekle', modal: 'add' },
	{ icon: <EditIcon />, name: 'Düzenle', modal: 'edit' },
	{ icon: <DeleteIcon />, name: 'Sil', modal: 'delete' },
];

// eslint-disable-next-line react/prop-types
const MenuEdit = ({ open }) => {
	if (open)
		return (
			<Box
				sx={{
					height: 320,
					transform: 'translateZ(0px)',
					flexGrow: 1,
				}}
			>
				<SpeedDial
					ariaLabel="SpeedDial openIcon example"
					sx={{ position: 'absolute', bottom: 16, right: 16 }}
					icon={<SpeedDialIcon openIcon={<EditIcon />} />}
				>
					{actions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
						/>
					))}
				</SpeedDial>
			</Box>
		);
};

export default MenuEdit;
