import { CommandRuntime, CommandDeclaration, CommandContext } from '@joplin/lib/services/CommandService';
import { _ } from '@joplin/lib/locale';
import eventManager, { EventName } from '@joplin/lib/eventManager';

export const declaration: CommandDeclaration = {
	name: 'togglefullscreen',
	label: () => _('Toggle fullscreen'),
	iconName: 'material fullscreen',
};

export const runtime = (): CommandRuntime => {
	return {
		execute: async (_context: CommandContext) => {
			eventManager.emit(EventName.ToggleFullscreen);
		},
	};
};
